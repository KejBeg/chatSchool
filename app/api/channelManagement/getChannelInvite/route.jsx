'use server';

// Tool Imports
import { getUserObjectByToken } from '/tools/publicTools';
import { executeQuery } from '/tools/database';

export async function POST(request) {
	try {
		const requestBody = await request.json();
		const authorization = request.headers.get('authorization');
		const userObject = await getUserObjectByToken(authorization);
		const channelID = requestBody.channelID;

		// Check if channelID is provided
		if (!channelID) {
			console.log('channelID was not provided');
			return new Response('channelID is required', { status: 400 });
		}

		// Check if user is authorized
		if (!userObject || !authorization) {
			return new Response('Unauthorized', { status: 401 });
		}

		// Getting invite
		let invite = await executeQuery(
			`SELECT BIN_TO_UUID(invite) as invite, invite_expiration_datetime FROM channels WHERE id = ? AND JSON_CONTAINS(users, ?)`,
			[channelID, JSON.stringify(userObject.sub)]
		);
		invite = JSON.parse(invite)[0];

		// If invite is expired, create a new one
		if (new Date(invite.invite_expiration_datetime) > new Date()) {
			await executeQuery(
				`UPDATE channels SET invite = UUID_TO_BIN(UUID()), invite_expiration_datetime = CURRENT_TIMESTAMP + INTERVAL 1 DAY WHERE id = ?`,
				[channelID]
			);
		}

		// Getting invite
		invite = await executeQuery(
			`SELECT BIN_TO_UUID(invite) as invite, invite_expiration_datetime FROM channels WHERE id = ? AND JSON_CONTAINS(users, ?)`,
			[channelID, JSON.stringify(userObject.sub)]
		);
		invite = JSON.parse(invite)[0];

		// Return Response
		console.log(`Invite for channel ${channelID} created successfully by user ${userObject.sub}`);
		invite = JSON.stringify(invite);
		return new Response(invite, { status: 200 });
	} catch (error) {
		console.log(error);
		return Response.json({ message: 'Internal Sever Error' }, { status: 500 });
	}
}

