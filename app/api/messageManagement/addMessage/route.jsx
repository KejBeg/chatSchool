// Module Imports

// Tools Imports
import { executeQuery } from '/tools/database.js';
import { getNextAccessToken, getUserObject } from '/tools/publicTools';

export async function POST(request) {
	try {
		const requestBody = await request.json();
		const authorization = request.headers.get('authorization');
		const message = requestBody.message;
		const userObject = await getUserObject(authorization);

		// Check if the message is provided
		if (!message) {
			return new Response('message is required', { status: 400 });
		}

		// Check if authorization or userObject is null
		if (!authorization || !userObject) {
			return new Response('Unauthorized', { status: 401 });
		}

		executeQuery(
			`INSERT INTO messages (message, owner, created_at) VALUES (?, ?, CURRENT_TIMESTAMP)`,
			[message, userObject.sub]
		);

		return new Response('Message sent', { status: 200 });
	} catch (error) {
		return new Response('An error occurred', { status: 500 });
	}
}

