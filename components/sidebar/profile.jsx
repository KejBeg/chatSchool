// Module Imports
import Link from 'next/link';

export default function Profile({ user }) {
	// If User is not logged in
	if (!user)
		return (
			<div className="grid grid-cols-[2fr,3fr]">
				<div className="flex justify-center items-center w-full h-full">
					<img
						src="/images/defaultProfilePicture.svg"
						alt="Picture"
					/>
				</div>
				<div className="grid grid-rows-[1fr,1f]">
					<div className="flex justify-center items-end w-full h-full">Guest</div>
					<div className="flex justify-center items-start w-full h-full">
						<Link
							href="/api/auth/login"
							className="flex justify-center items-center bg-red-500 hover:bg-red-700 p-3 rounded-md">
							Login
						</Link>
					</div>
				</div>
			</div>
		);

	// If User is logged in
	return (
		// <div className="bottom-0 fixed">
		<div className="grid grid-cols-[2fr,3fr]">
			<div className="flex justify-center items-center w-full h-full">
				<Link href="/api/auth/me">
					<img
						className="rounded-full w-24 h-24"
						src={user.picture}
						alt={user.name}
					/>
				</Link>
			</div>
			<div className="grid grid-rows-[1fr,1fr]">
				<div className="flex justify-center items-end w-full h-full">{user.name}</div>
				<div className="flex justify-center items-start w-full h-full">
					<Link
						href="/api/auth/logout"
						className="flex justify-center items-center bg-red-500 hover:bg-red-700 p-3 rounded-md">
						Log out
					</Link>
				</div>
			</div>
		</div>
	);
}

