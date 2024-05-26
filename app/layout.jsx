'use client';

// Module Imports
import { useEffect, useState } from 'react';

// Tool Imports
import { UserProvider } from '@auth0/nextjs-auth0/client';
import myContext from '/contexts/mainContextProvider.jsx';

// Component Imports
import Navbar from '/components/navbar';
import { getUserToken } from '/tools/publicTools';
import { socketHandling, socket } from '/tools/socket';

// Style Imports
import '/public/styles/globals.css';

export default function RootLayout({ children }) {
	// State variables
	const [contextVariables, setContextVariables] = useState(null);

	useEffect(() => {
		(async () => {
			// Get user token
			let userToken = await getUserToken();

			setContextVariables({
				...contextVariables,
				userToken: userToken,
				socket,
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

