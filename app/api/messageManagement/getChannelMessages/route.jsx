// Module Imports

// Tool Imports
import { getUserObjectBySub, getAllUsers } from '/tools/privateTools';
import { executeQuery } from '/tools/database.js';
import { getUserObjectByToken } from '/tools/publicTools';

export async function POST(request) {
	try {
		const requestBody = await request.json();
		const authorization = request.headers.get('authorization');
		const channelID = requestBody.channelID;
		const userObject = await getUserObjectByToken(authorization);

		// Check if authorization or userObject is null
		if (!authorization || !userObject) {
			console.log('Unauthorized because userObject or authorization is null');
			return new Response('Unauthorized', { status: 401 });
		}

		// Check if the channel name is provided
		if (!channelID) {
			console.log(`Channel ID was not provided by user ${userObject.sub}`);
			return new Response('Channel ID is required', { status: 400 });
		}

		// If the channel is the global channel (meaning the ID is 1), get all messages
		let messages;
		if (channelID == 1) {
			messages = await executeQuery(
				`SELECT * FROM messages WHERE channel = ? ORDER BY creation_datetime ASC`,
				[channelID]
			);
		} else {
			// Check if the user is in the channel
			let channelUsers = await executeQuery(
				`SELECT users FROM channels WHERE id = ? AND JSON_CONTAINS(users, ?)`,
				[channelID, JSON.stringify(userObject.sub)]
			);
			channelUsers = JSON.parse(channelUsers);

			if (channelUsers.length == 0 || !channelUsers) {
				console.log(`User ${userObject.sub} is not in channel ${channelID}`);
				return new Response('Unauthorized', { status: 401 });
			}

			messages = await executeQuery(
				`SELECT * FROM messages WHERE  channel = ? ORDER BY creation_datetime ASC`,
				[channelID, userObject.sub]
			);
		}

		messages = JSON.parse(messages);

		let allUsers = await getAllUsers();

		// Get the owner name for each message
		messages = messages.map((message) => {
			let ownerObject = allUsers.find((user) => user.user_id === message.owner);
			message.ownerName = ownerObject.name;
			return message;
		});

		// Return Response
		console.log(`Messages for channel ${channelID} fetched successfully by user ${userObject.sub}`);
		return new Response(JSON.stringify(messages), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('An error occurred', { status: 500 });
	}
}

