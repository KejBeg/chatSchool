'use server';

// Module Imports
import { getAccessToken } from '@auth0/nextjs-auth0';

export async function POST(request) {
	try {
		const { accessToken } = await getAccessToken(request);
		return Response.json({ userToken: accessToken });
	} catch (error) {
		return Response.json({ message: 'Bad Request' }, { status: 400 });
	}
}

