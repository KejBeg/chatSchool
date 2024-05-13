'use client';

// Module Imports
import { useEffect, useState } from 'react';

// Tool Imports
import { UserProvider } from '@auth0/nextjs-auth0/client';
import myContext from '/contexts/mainContextProvider.jsx';

// Component Imports
import Navbar from '/components/navbar';
import { getUserToken } from '/tools/publicTools';

export default function RootLayout({ children }) {
	// State variables
	const [contextVariables, setContextVariables] = useState(null);

	useEffect(() => {
		// Get user token
		(async () => {
			let userToken = await getUserToken();
			setContextVariables({ ...contextVariables, userToken: userToken });
		})();
	}, []);

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

