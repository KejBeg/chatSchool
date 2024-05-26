'use client';

// Module Imports
import { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

// Style Imports
import '/public/styles/navbar.css';

export default function Navbar() {
	const { user, error, isLoading } = useUser();
	return (
		<nav id="navbar">
			<ul>
				<li id="navbar-links-container">
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
					</ul>
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

