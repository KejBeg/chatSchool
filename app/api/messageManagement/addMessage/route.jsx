// Module Imports

// Tools Imports
import { executeQuery } from '/tools/database.js';
import { getNextAccessToken, getUserObjectByToken } from '/tools/publicTools';

export async function POST(request) {
	try {
		const requestBody = await request.json();
		const authorization = request.headers.get('authorization');
		const userObject = await getUserObjectByToken(authorization);
		const message = requestBody.message;
		const channelID = requestBody.channelID;
		const creation_datetime = requestBody.creation_datetime;

		// Check if the message is provided
		if (!message) {
			return new Response('message is required', { status: 400 });
		}

		// Check if authorization or userObject is null
		if (!authorization || !userObject) {
			return new Response('Unauthorized', { status: 401 });
		}

		// Saving the message to the database
		executeQuery(
			`INSERT INTO messages (message, owner, creation_datetime, channel) VALUES (?, ?, ?, ?)`,
			[message, userObject.sub, creation_datetime, channelID]
		);

		return new Response('Message sent', { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('An error occurred', { status: 500 });
	}
}

