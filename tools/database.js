// Imports
const db = require('mysql');
require('dotenv').config();

// Create a connection to the database
const con = db.createConnection({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
});

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
				reject(error);
			} else {
				resolve(JSON.stringify(result));
			}
		});
	});
}

// Setup the database
function setupDatabase() {
	const createChannelsTable = `CREATE TABLE IF NOT EXISTS channels (id INT PRIMARY KEY AUTO_INCREMENT, name TEXT, owner TEXT, created_at DATETIME)`;
	const createMessagesTable = `CREATE TABLE IF NOT EXISTS messages(id INT PRIMARY KEY AUTO_INCREMENT, message TEXT, channel INT, owner TEXT, created_at DATETIME, FOREIGN KEY(channel) REFERENCES channels(id))`;

	// Execute the queries
	executeQuery(createChannelsTable);
	executeQuery(createMessagesTable);
}

// Call the setupDatabase function to create the tables
setupDatabase();

