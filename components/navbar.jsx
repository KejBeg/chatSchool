'use client';

// Module Imports
import { useEffect, useContext, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

// Tool Imports
import MainContext from '/contexts/mainContextProvider';

// Style Imports
import '/public/styles/navbar.css';

export default function Navbar() {
	// State Variables
	const [pageName, setPageName] = useState('');
	const [pathName, setPathName] = useState(
		typeof window !== 'undefined' ? window.location.pathname : ''
	);

	// Auth0 Variables
	const { user } = useUser();

	useEffect(() => {
		if (typeof window == 'undefined') return;
		if (pathName == '/') {
			setPageName('Channels List');
		} else if (pathName.includes('/channels/')) {
			setPageName('Channel');
		}
	}, [pathName]);

	return (
		<nav id="navbar">
			<ul>
				<li id="navbar-links-container">
					<ul>
						<li>
							<Link href="/">Channels</Link>
						</li>
					</ul>
				</li>

				<li id="navbar-page-name">
					<div>{pageName}</div>
				</li>

				<li id="navbar-profile-container">
					<ul>
						{(user && (
							<>
								<li>
									<Link href="/api/auth/logout">Logout</Link>
								</li>
								<li>
									<Link href="api/auth/me">
										<img
											src={user.picture}
											alt="profile picture"
										/>
									</Link>
								</li>
							</>
						)) || (
							<li>
								<Link href="/api/auth/login">Login</Link>
							</li>
						)}
					</ul>
				</li>
			</ul>
		</nav>
	);
}

