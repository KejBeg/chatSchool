// Module Imports
import { useEffect, useState } from 'react';

// Tool Imports
import { useContext } from 'react';
import myContext from '/contexts/mainContextProvider';

/// Style Imports
import style from '/public/styles/usersPage.css';

export default function UsersPage({ params }) {
	const currentChannelID = params.channel;

	const [usersList, setUsersList] = useState([]);

	// Context Variables
	const { userToken } = useContext(myContext);

	useEffect(() => {
		// Fetch channel users
		(async () => {
			if (currentChannelID == 1) return;

			// Check if user token is available
			if (!userToken) return;

			// Fetch channel users
			let response = await fetch('/api/channelManagement/getChannelUsers', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					authorization: userToken,
				},
				body: JSON.stringify({ channelID: currentChannelID }),
			});

			// Check if response is ok
			if (!response.ok) {
				return;
			}

			let data = await response.json();

			setUsersList(data);
		})();
	}, [userToken, currentChannelID]);

	return (
		<ul id="users-page">
			{usersList.map((user) => (
				<li key={user.sub}>
					<div className="picture">
						<img
							src={user.picture}
							alt={`${user.name}'s picture`}
						/>
					</div>
					<div className="name">{user.name}</div>
				</li>
			))}
		</ul>
	);
}

