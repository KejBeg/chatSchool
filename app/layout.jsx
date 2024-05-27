'use client';

// Module Imports
import { useEffect, useState } from 'react';

// Tool Imports
import { UserProvider } from '@auth0/nextjs-auth0/client';
import myContext from '/contexts/mainContextProvider.jsx';

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
						<button
							onClick={() => {
								console.log(contextVariables);
							}}>
							tst
						</button>
						<Navbar />
						{children}
					</body>
				</myContext.Provider>
			</UserProvider>
		</html>
	);
}

