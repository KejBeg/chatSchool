// Module Imports

// Tools Imports
import executeQuery from '/tools/database.js';
import { getNextAccessToken, getUserObjext } from '/tools/privateTools';

export async function POST(request) {
	try {
		const requestBody = await request.json();
		const authorization = request.headers.get('authorization');
		const channelName = requestBody.channelName;
		const userObject = await getUserObjext(authorization);

		executeQuery(
			`INSERT INTO channels (name, owner, created_at) VALUES (?, ?, CURRENT_TIMESTAMP)`,
			[channelName, userObject.sub]
		);

		return new Response('Channel created', { status: 200 });
	} catch (error) {
		return new Response('An error occurred', { status: 500 });
	}
}

