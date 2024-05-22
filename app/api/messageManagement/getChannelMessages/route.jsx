// Module Imports

// Tool Imports
import { getUserObjectBySub } from '/tools/privateTools';
import { executeQuery } from '/tools/database.js';
import { getUserObjectByToken } from '/tools/publicTools';

export async function POST(request) {
	try {
		const requestBody = await request.json();
		const authorization = request.headers.get('authorization');
		const channelID = requestBody.channelID;
		const userObject = await getUserObjectByToken(authorization);

		// Check if the channel name is provided
		if (!channelID) {
			return new Response('Channel ID is required', { status: 400 });
		}

		// Check if authorization or userObject is null
		if (!authorization || !userObject) {
			return new Response('Unauthorized', { status: 401 });
		}

		// Getting all messages for the channel
		let messages = await executeQuery(
			`SELECT * FROM messages WHERE channel = ? ORDER BY created_at ASC`,
			[channelID]
		);
		messages = JSON.parse(messages);

		// Get the owner name for each message
		messages = await Promise.all(
			messages.map(async (message) => {
				let ownerObject = await getUserObjectBySub(message.owner);
				message.ownerName = ownerObject.name;
				return message;
			})
		);

		return new Response(JSON.stringify(messages), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('An error occurred', { status: 500 });
	}
}

