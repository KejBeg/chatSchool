/**
 * Retrieves the NEXT access token from the server.
 * @returns {Promise<string|null>} The access token or null if the request fails.
 */
export async function getNextAccessToken() {
	let response = await fetch(`${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/oauth/token`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			client_id: process.env.NEXT_ACCESS_TOKEN_CLIENT_ID,
			client_secret: process.env.NEXT_ACCESS_TOKEN_CLIENT_SECRET,
			audience: `${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/api/v2/`,
			grant_type: process.env.NEXT_ACCESS_TOKEN_GRANT_TYPE,
		}),
	});

	// Check if response is ok
	if (!response.ok) return null;

	// If response is ok, return data
	let data = await response.json();
	let accessToken = data.access_token;
	return accessToken;
}

/**
 * Retrieves the user object using the provided access token.
 * @param {string} accessToken - The access token for authentication.
 * @returns {Promise<object|null>} - A promise that resolves to the user object if successful, or null if there was an error.
 */
export async function getUserObjext(accessToken) {
	let response = await fetch(`${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/userinfo`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});

	// Check if response is ok
	if (!response.ok) return null;

	// If response is ok, return data
	let data = await response.json();
	return data;
}

/**
 * Sends user metadata to the server.
 * @param {string} userToken - The user token.
 * @param {object} object - The user metadata object.
 */
export async function sendUserMetaData(userToken, object) {
	const userObject = await getUserObjectByToken(userToken);

	let response = await fetch(
		`${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/api/v2/users/${userObject.sub}`,
		{
			method: 'PATCH',
			headers: {
				authorization: `Bearer ${getNextAccessToken()}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				app_metadata: { object },
			}),
		}
	);
}

/**
 * Retrieves the user object by userSub.
 *
 * @param {string} userSub - The userSub to retrieve the user object for.
 * @returns {Promise<Object>} - The user object.
 */
export async function getUserObjectBySub(userSub) {
	let response = await fetch(`${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/api/v2/users/${userSub}`, {
		method: 'GET',
		headers: {
			authorization: `Bearer ${await getNextAccessToken()}`,
		},
	});

	let data = await response.json();

	return data;
}

