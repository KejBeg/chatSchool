'use server';

// Tools Imports
import { executeQuery } from '/tools/database.js';
import { getUserObjectByToken } from '/tools/publicTools';

export async function GET(request) {
	try {
		const authorization = request.headers.get('authorization');
		const userObject = await getUserObjectByToken(authorization);

		// Check if user is authorized
		if (!userObject || !authorization) {
			console.log('Unauthorized because userObject or authorization is null');
			return new Response('Unauthorized', { status: 401 });
		}

		// Get user channels by user sub
		const channels = await executeQuery(
			`SELECT * FROM channels WHERE JSON_CONTAINS(users, ?) OR name = 'Global'`,
			[JSON.stringify(userObject.sub)]
		);

		// Return Response
		console.log(`Channels for user ${userObject.sub} fetched successfully`);
		return new Response(channels, { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('An error occurred', { status: 500 });
	}
}

