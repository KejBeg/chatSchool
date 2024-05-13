// Module Imports

// Tools Imports
import executeQuery from '/tools/database.js';
import { getNextAccessToken, getUserObjext } from '/tools/privateTools';

export async function POST(request) {
	try {
		const requestBody = await request.json();
		const authorization = request.headers.get('authorization');
		const message = requestBody.message;
		const userObject = await getUserObjext(authorization);

		executeQuery(
			`INSERT INTO messages (message, owner, created_at) VALUES (?, ?, CURRENT_TIMESTAMP)`,
			[message, userObject.sub]
		);

		return new Response('Message sent', { status: 200 });
	} catch (error) {
		return new Response('An error occurred', { status: 500 });
	}
}

