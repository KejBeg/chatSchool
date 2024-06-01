'use client';

// Module Imports
import { useEffect, useState } from 'react';

// Tool Imports
import { UserProvider } from '@auth0/nextjs-auth0/client';

// Component Imports
import { getUserToken } from '/tools/publicTools';
import LayoutContext from '/components/layoutContext';

// Style Imports
import '/public/styles/globals.css';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<UserProvider>
				<body>
					<LayoutContext children={children} />
				</body>
			</UserProvider>
		</html>
	);
}

