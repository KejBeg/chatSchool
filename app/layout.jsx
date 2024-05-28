'use client';

// Module Imports
import { useEffect, useState } from 'react';

// Tool Imports
import myContext from '/contexts/mainContextProvider.jsx';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { handleLogout } from '@auth0/nextjs-auth0';

// Component Imports
import Navbar from '/components/navbar';
import { getUserToken } from '/tools/publicTools';
import { socket } from '/tools/socket';

// Style Imports
import '/public/styles/globals.css';

export default function RootLayout({ children }) {
	// State variables
	const [contextVariables, setContextVariables] = useState({});

	// User Token useEffect
	useEffect(() => {
		(async () => {
			// Get user token
			let userToken;
			if (!contextVariables.userToken) userToken = await getUserToken();

			// If user token is not found, log out
			if (!userToken) {
				fetch('/api/auth/logout', {
					method: 'GET',
					headers: {
						'Content-Type': 'application',
					},
				});
			}

			setContextVariables({
				...contextVariables,
				userToken: userToken,
				socket: socket,
			});
		})();
	}, [socket]);

	return (
		<html lang="en">
			<UserProvider>
				<myContext.Provider value={{ ...contextVariables }}>
					<body>
						<Navbar />
						{children}
					</body>
				</myContext.Provider>
			</UserProvider>
		</html>
	);
}

