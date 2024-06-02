// Module Imports
import { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

// Tool Imports
import myContext from '/contexts/mainContextProvider.jsx';
import { getUserToken } from '/tools/publicTools';
import { socket } from '/tools/socket';

// Component Imports
import Navbar from '/components/navbar';

export default function LayoutContext({ children }) {
	const [contextVariables, setContextVariables] = useState({});
	const { user } = useUser();

	useEffect(() => {
		(async () => {
			// Get user token
			let userToken = await getUserToken();

			// If user token is not found, log out
			if (!userToken && user) {
				fetch('/api/auth/logout', {
					method: 'GET',
					headers: {
						'Content-Type': 'application',
					},
				});
				window.location.reload();
			}

			setContextVariables({
				...contextVariables,
				userToken: userToken,
				socket: socket,
			});
		})();
	}, [socket, user]);

	return (
		<myContext.Provider value={{ ...contextVariables }}>
			<Navbar />
			<main>{children}</main>
		</myContext.Provider>
	);
}

