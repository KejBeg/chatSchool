// Module Imports

// Tools Imports
import { executeQuery } from '/tools/database.js';
import { getNextAccessToken, getUserObjectByToken } from '/tools/publicTools';

export async function POST(request) {
	try {
		const requestBody = await request.json();
		const authorization = request.headers.get('authorization');
		const userObject = await getUserObjectByToken(authorization);
		const { message, channelID, creation_datetime } = requestBody;

		// Check if authorization or userObject is null
		if (!authorization || !userObject) {
			console.log(`userObject: ${userObject}, authorization: ${authorization}`);
			console.log('Unauthorized because userObject or authorization is null');
			return new Response('Unauthorized', { status: 401 });
		}

		// Check if channelID is provided
		if (!channelID) {
			console.log(`channelID was not provided by user ${userObject.sub}`);
			return new Response('channelID is required', { status: 400 });
		}

		if (!creation_datetime) {
			console.log(
				`creation_datetime was not provided by user ${userObject.sub} in channel ${channelID}`
			);
			return new Response('creation_datetime is required', { status: 400 });
		}

		// Check if the message is provided
		if (!message) {
			console.log(`Message was not provided by user ${userObject.sub} in channel ${channelID}`);
			return new Response('message is required', { status: 400 });
		}

		// Saving the message to the database
		executeQuery(
			`INSERT INTO messages (message, owner, creation_datetime, channel) VALUES (?, ?, ?, ?)`,
			[message, userObject.sub, creation_datetime, channelID]
		);

		// Return Response
		console.log(`Message sent by user ${userObject.sub} in channel ${channelID}`);
		return new Response('Message sent', { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('An error occurred', { status: 500 });
	}
}

