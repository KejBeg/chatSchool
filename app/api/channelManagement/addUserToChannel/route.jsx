'use server';

// Tool Imports
import { getUserObjectByToken } from '/tools/publicTools';
import { executeQuery } from '/tools/database';

export async function POST(request) {
	try {
		const requestBody = await request.json();
		const authorization = request.headers.get('authorization');
		const userObject = await getUserObjectByToken(authorization);
		const invite = requestBody.invite;

		// Check if user is authorized
		if (!userObject || !authorization) {
			return new Response('Unauthorized', { status: 401 });
		}

		// Check if channelID is provided
		if (!invite) {
			return new Response('channelID is required', { status: 400 });
		}

		// Getting expiration datetime
		let expirationDatetime = await executeQuery(
			`SELECT invite_expiration_datetime FROM channels WHERE invite = ?`,
			[invite]
		);
		expirationDatetime = JSON.parse(expirationDatetime)[0];

		// Check if invite is expired
		if (new Date(expirationDatetime) < new Date()) {
			return new Response('Invite is expired', { status: 400 });
		}

		// Checking if user already in channel
		let isUserInChannel = await executeQuery(
			`SELECT JSON_CONTAINS(users, ?) as userInChannel FROM channels WHERE invite = UUID_TO_BIN(?)`,
			[JSON.stringify(userObject.sub), invite]
		);
		isUserInChannel = JSON.parse(isUserInChannel)[0];

		if (isUserInChannel.userInChannel) {
			return new Response('User is already in channel', { status: 400 });
		}

		// Adding user to channel
		await executeQuery(
			`UPDATE channels SET users = JSON_ARRAY_APPEND(users, '$', ?) WHERE invite = UUID_TO_BIN(?)`,
			[userObject.sub, invite]
		);

		return new Response('User added to channel', { status: 200 });
	} catch (error) {
		console.log(error);
		return Response.json({ message: 'Internal Sever Error' }, { status: 500 });
	}
}

