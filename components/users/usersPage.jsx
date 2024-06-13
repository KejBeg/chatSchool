// Module Imports
import { useEffect, useState } from 'react';

// Tool Imports
import { useContext } from 'react';
import myContext from '/contexts/mainContextProvider';

// Component Imports
import UsersError from '/components/users/usersError';

export default function UsersPage({ channelID }) {
	const [usersList, setUsersList] = useState([]);
	const [usersState, setUsersState] = useState('loading');

	// Context Variables
	const { userToken } = useContext(myContext);

	useEffect(() => {
		// Fetch channel users
		(async () => {
			if (channelID == 1) return;

			// Check if user token is available
			if (!userToken) return;

			// Fetch channel users
			let response = await fetch('/api/channelManagement/getChannelUsers', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					authorization: userToken,
				},
				body: JSON.stringify({ channelID: channelID }),
			});

			// Check if response is ok
			if (!response.ok) {
				setUsersState('error');
				return;
			}

			let data = await response.json();

			setUsersList(data);
			setUsersState('loaded');
		})();
	}, [userToken, channelID]);

	if (usersState == 'error') {
		return <UsersError message={'An Error occured, try reloading'} />;
	} else if (usersState == 'loading') {
		return <UsersError message={'Loading Users...'} />;
	}

	return (
		<ul className="grid grid-rows-[repeat(10,1fr)] p-3 w-full h-full overflow-x-hidden overflow-y-auto">
			{usersList.map((user) => (
				<li
					key={user.sub}
					className="flex justify-center items-center pr-1 pl-1 w-full h-full">
					<div className="flex justify-start items-center w-full h-full">
						<img
							src={user.picture}
							alt={`${user.name} picture`}
							className="rounded-full"
						/>
					</div>
					<div className="flex justify-center items-center w-full h-full">{user.name}</div>
				</li>
			))}
		</ul>
	);
}

