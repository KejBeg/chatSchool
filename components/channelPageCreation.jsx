'use client';

// Module Imports
import { useState } from 'react';

export default function ChannelPageCreation({ refreshChannels, setRefreshChannels, userToken }) {
	const [showCreateChannel, setShowCreateChannel] = useState(false);
	const [channelName, setChannelName] = useState('');

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
	return (
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
						autoFocus
						value={channelName}
						onChange={(e) => setChannelName(e.target.value)}
						type="text"
						name="channelName"
					/>
					<button type="submit">Create</button>
				</form>
			)) || (
				<button
					type="button"
					onClick={(e) => setShowCreateChannel(true)}>
					<img
						src="/images/plus.svg"
						alt="plus"
					/>
				</button>
			)}
		</li>
	);
}

