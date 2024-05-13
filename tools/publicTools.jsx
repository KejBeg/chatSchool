'use client';

/**
 * Retrieves the user token from the server.
 * @returns {Promise<string|null>} The user token if successful, or null if there was an error.
 */
export async function getUserToken() {
	// Fetch user token
	let response = await fetch(`http://localhost:3000/api/auth/getUserToken`, {
		method: 'POST',
	});

	// Check if response is ok
	if (!response.ok) return null;

	// If response is ok, return data
	let data = await response.json();
	data = data.userToken;
	return data;
}

export async function getUserObject(userToken) {
	let response = await fetch(`${process.env.NEXT_PUBLIC_MTM_URL}/userinfo`, {});
}

