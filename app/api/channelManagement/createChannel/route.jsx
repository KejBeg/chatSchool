'use server';

// Module Imports

// Tools Imports
import { executeQuery } from '/tools/database.js';
import { getNextAccessToken, getUserObjext } from '/tools/privateTools';

export async function POST(request) {
	try {
		const requestBody = await request.json();
		const authorization = request.headers.get('authorization');
		const channelName = requestBody.channelName;
		const userObject = await getUserObjext(authorization);

		// Check if the channel name is provided
		if (!channelName) {
			return new Response('Channel name is required', { status: 400 });
		}

		if (channelName.length > 50) {
			return new Response('Channel name is too long', { status: 400 });
		}

		if (channelName == 'Global') {
			return new Response('Channel name is reserved', { status: 400 });
		}

		// Check if authorization or userObject is null
		if (!authorization || !userObject) {
			return new Response('Unauthorized', { status: 401 });
		}

		// Create a new channel
		executeQuery(
			`INSERT INTO channels (name, owner, creation_datetime, users) VALUES (?, ?, CURRENT_TIMESTAMP, JSON_ARRAY(?))`,
			[channelName, userObject.sub, userObject.sub]
		);

		return new Response('Channel created', { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('An error occurred', { status: 500 });
	}
}

