// Imports
import db from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

// Create a connection to the database
let con;
try {
	con = db.createConnection({
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		// TODO Remove insecureAuth and use a secure connection
		insecureAuth: true,
	});
} catch (error) {
	console.log('Database Connection Failed');
	throw error;
}

// Connect to the database
function connectDatabase() {
	con.connect((error) => {
		if (error) {
			console.log('Database Connection Failed');
			throw error;
		} else {
			console.log('Database Connected');
		}
	});
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
				console.log(`Error executing query: ${query}`);
				console.log(error);
				console.log(`result : ${result}`);
				reject(error);
			} else {
				resolve(JSON.stringify(result));
			}
		});
	});
}

// Setup the database
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

