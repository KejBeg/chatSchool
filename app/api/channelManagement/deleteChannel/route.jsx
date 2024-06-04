'use server';

// Tools Imports
import { executeQuery } from '/tools/database.js';
import { getUserObjext } from '/tools/privateTools';

export async function DELETE(request) {
	try {
		const requestBody = await request.json();
		const authorization = request.headers.get('authorization');
		const channelID = requestBody.channelID;
		const userObject = await getUserObjext(authorization);

		// Check if the channel ID is provided
		if (!channelID) {
			return new Response('Channel ID is required', { status: 400 });
		}

		// Check if authorization or userObject is null
		if (!authorization || !userObject) {
			return new Response('Unauthorized', { status: 401 });
		}

		// Check if the user is the owner of the channel
		let channel = await executeQuery('SELECT * FROM channels WHERE id = ?', [channelID]);
		channel = JSON.parse(channel);
		channel = channel[0];
		if (channel.owner !== userObject.sub) {
			return new Response('Unauthorized', { status: 401 });
		}

		// Delete the messages of the channel
		await executeQuery('DELETE FROM messages WHERE channel = ?', [channelID]);

		// Delete the channel
		executeQuery('DELETE FROM channels WHERE id = ?', [channelID]);

		return new Response('Channel deleted', { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('An error occurred', { status: 500 });
	}
}

