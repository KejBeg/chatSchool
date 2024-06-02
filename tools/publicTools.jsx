/**
 * Retrieves the user token from the server.
 * @returns {Promise<string|null>} The user token if successful, or null if there was an error.
 */
export async function getUserToken() {
	// Fetch user token
	let response = await fetch(`/api/auth/getUserToken`, {
		method: 'POST',
	});

	// Check if response is ok
	if (!response.ok) return null;

	// If response is ok, return data
	let data = await response.json();
	data = data.userToken;
	return data;
}

/**
 * Retrieves the user object from the server using the provided user token.
 *
 * @param {string} userToken - The user token used for authentication.
 * @returns {Promise<object|null>} - A promise that resolves to the user object if successful, or null if there was an error.
 */
export async function getUserObjectByToken(userToken) {
	try {
		let response = await fetch(`${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/userinfo`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		});

		if (!response.ok) return null;

		let data = await response.json();
		return data;
	} catch (error) {
		return null;
	}
}

