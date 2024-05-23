// Module Imports
import { useContext, useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

// Tool Imports
import myContext from '/contexts/mainContextProvider';

export default function ChannelSelection() {
	// State Variables
	const [refreshChannels, setRefreshChannels] = useState(false);
	const [channels, setChannels] = useState([]);
	const [showCreateChannel, setShowCreateChannel] = useState(false);
	const [channelName, setChannelName] = useState('');

	// Context Variables
	const { userToken } = useContext(myContext);

	// Auth0 Variables
	const { user, isLoading, error } = useUser();

	useEffect(() => {
		// Fetch user channels
		(async () => {
			// Check if user token is available
			if (!userToken) return;

			// Fetch user channels
			let response = await fetch('/api/channelManagement/getUserChannels', {
				method: 'GET',
				headers: {
					authorization: userToken,
				},
			});

			// Check if response is ok
			if (!response.ok) return;

			let data = await response.json();
			setChannels(data);
		})();
	}, [userToken, refreshChannels]);

	const createChannel = async (event) => {
		event.preventDefault();
		// Check if user token is available
		if (!userToken) return;

		// Reset the channel name
		setChannelName('');

		// Hide the create channel form
		setShowCreateChannel(false);

		// Create a new channel
		let response = await fetch('/api/channelManagement/createChannel', {
			method: 'POST',
			headers: {
				authorization: userToken,
			},
			body: JSON.stringify({ channelName }),
		});

		// Refresh the channels
		setRefreshChannels(!refreshChannels);
	};

	const deleteChannel = async (channelID) => {
		// Check if user token is available
		if (!userToken) return;

		// Delete the channel
		let response = await fetch('/api/channelManagement/deleteChannel', {
			method: 'DELETE',
			headers: {
				authorization: userToken,
			},
			body: JSON.stringify({ channelID }),
		});

		// Refresh the channels
		setRefreshChannels(!refreshChannels);
	};

	return (
		<>
			<ul>
				{channels.map((channel) => (
					<li key={channel.id}>
						{channel.owner === user.sub && (
							<button onClick={(e) => deleteChannel(channel.id)}>X</button>
						)}
						<Link href={`/channels/${channel.id}`}>{channel.name}</Link>
					</li>
				))}
				<li>
					{(showCreateChannel && (
						<form
							onSubmit={(e) => createChannel(e)}
							onKeyDown={(event) => {
								if (event.key == 'Escape') {
									setShowCreateChannel(false);
									setChannelName('');
								}
							}}>
							<label htmlFor="channelName">Channel Name</label>
							<input
								value={channelName}
								onChange={(e) => setChannelName(e.target.value)}
								type="text"
								name="channelName"
							/>
							<button type="submit">Create</button>
						</form>
					)) || <button onClick={(e) => setShowCreateChannel(true)}>+</button>}
				</li>
			</ul>
		</>
	);
}

