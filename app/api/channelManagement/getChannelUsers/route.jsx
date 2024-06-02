// Tool Imports
import { executeQuery } from '/tools/database';
import { getAllUsers } from '/tools/privateTools';
import { getUserObjectByToken } from '/tools/publicTools';

export async function POST(request) {
	try {
		const requestBody = await request.json();
		const authorization = request.headers.get('authorization');
		const userObject = await getUserObjectByToken(authorization);
		const channelID = requestBody.channelID;

		// Check if user is authorized
		if (!userObject || !authorization) {
			return new Response('Unauthorized', { status: 401 });
		}

		// Check if channelID is provided
		if (!channelID) {
			return new Response('channelID is required', { status: 400 });
		}

		// Getting all users in the channel
		let channelUserIDList = await executeQuery(
			`SELECT users FROM channels WHERE id = ? AND JSON_CONTAINS(users, ?)`,
			[channelID, JSON.stringify(userObject.sub)]
		);
		channelUserIDList = JSON.parse(channelUserIDList)[0].users;

		// This bit is used to get wanted user data from the database
		let allUsersList = await getAllUsers();
		let channelUsersObjectList = channelUserIDList.map((userID) => {
			let matchingUser = allUsersList.find((user) => user.user_id == userID);
			let resultUser = {
				sub: matchingUser.user_id,
				name: matchingUser.name,
				picture: matchingUser.picture,
			};
			return resultUser;
		});
		channelUsersObjectList = JSON.stringify(channelUsersObjectList);

		return new Response(channelUsersObjectList, { status: 200 });
	} catch (error) {
		console.error(error);
		return new Response('Internal Server Error', { status: 500 });
	}
}

