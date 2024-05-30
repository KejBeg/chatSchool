'use client';

// Module Imports
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

// Tool Imports
import mainContext from '/contexts/mainContextProvider';

export default function Invite({ params }) {
	const invite = params.invite;

	// Context Variables
	const { userToken } = useContext(mainContext);

	useEffect(() => {
		(async () => {
			if (!userToken) return;

			await fetch('/api/channelManagement/addUserToChannel', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: userToken,
				},
				body: JSON.stringify({ invite }),
			});

			window.location.href = '/';
		})();
	}, [userToken]);
}

