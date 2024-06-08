// Imports
import db from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

// Create a connection to the database
let con;

/**
 * Establishes a connection to the database.
 * @returns {void}
 * @throws {Error} If the database connection fails.
 */
try {
	con = db.createConnection({
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		enableKeepAlive: true,
	});
} catch (error) {
	console.log('Database Connection Failed');
	throw error;
}

/**
 * Executes a query on the database
 * @param {string} query The query to be executed
 * @param {Array} values The values to be inserted into the query
 * @returns {Promise} The result of the query
 */
export async function executeQuery(query, values = []) {
	return new Promise((resolve, reject) => {
		con.query(query, values, (error, result) => {
			if (error) {
				// Log the error
				console.log(`Error executing query: ${query}`);
				console.log(error);
				console.log(`result : ${result}`);

				// Reconnect to the database if the connection is lost
				if (error.code == 'PROTOCOL_CONNECTION_LOST') {
					con.connnect();
				}

				// Reject the promise
				reject(error);
			} else {
				// Resolve the promise
				resolve(JSON.stringify(result));
			}
		});
	});
}

/**
 * Sets up the database by creating necessary tables and inserting initial data.
 * @returns {Promise<void>} A promise that resolves when the database setup is complete.
 * @throws {Error} If there is an error during the database setup.
 */
export async function setupDatabase() {
	try {
		const createChannelsTable = `
		CREATE TABLE IF NOT EXISTS channels
		(
			id INT PRIMARY KEY AUTO_INCREMENT,
			name TEXT,
			owner TEXT,
			users JSON,
			creation_datetime DATETIME,
			invite BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
			invite_expiration_datetime DATETIME DEFAULT (CURRENT_TIMESTAMP + INTERVAL 1 DAY)
		);`;

		const createMessagesTable = `
		CREATE TABLE IF NOT EXISTS messages
		(
			id INT PRIMARY KEY AUTO_INCREMENT,
			message TEXT,
			channel INT,
			owner TEXT,
			creation_datetime DATETIME,
			FOREIGN KEY(channel) REFERENCES channels(id)
		);`;

		const createGlobalChannel = `
			INSERT IGNORE INTO channels (id, name, owner, users, creation_datetime)
			VALUES (1, 'Global', 'System', '[]', CURRENT_TIMESTAMP);
		`;

		// Execute the queries
		await executeQuery(createChannelsTable);
		await executeQuery(createMessagesTable);
		await executeQuery(createGlobalChannel);

		console.log('Database Setup Complete');
	} catch (error) {
		console.log('Database Setup Failed');
		throw error;
	}
}

