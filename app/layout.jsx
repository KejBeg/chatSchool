// Module Imports

// Tool Imports
import { UserProvider } from '@auth0/nextjs-auth0/client';

// Component Imports
import { getUserToken } from '/tools/publicTools';
import BodyProvider from '/components/bodyProvider';

// Style Imports
import '/public/styles/globals.css';

export const metadata = {
	title: 'BadCord| Channels',
	icon: '/public/badcord.png',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link
				rel="icon"
				href="/images/badcord.png"
			/>
			<UserProvider>
				<body>
					<BodyProvider children={children} />
				</body>
			</UserProvider>
		</html>
	);
}

