'use client';

// Module Imports
import { useState } from 'react';

export default function ChannelCreation({ refreshChannels, setRefreshChannels, userToken }) {
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
		<li className="flex border-[1px] border-black rounded w-full h-[20vh]">
			{(showCreateChannel && (
				<form
					className="grid grid-rows-[1fr,1fr,1fr] p-1 w-full h-full"
					onSubmit={(e) => createChannel(e)}
					onKeyDown={(event) => {
						if (event.key == 'Escape') {
							setShowCreateChannel(false);
							setChannelName('');
						}
					}}>
					<label
						className="flex justify-center items-center w-full h-full"
						htmlFor="channelName">
						Channel Name
					</label>
					<input
						className="flex border-[1px] p-2 border-black rounded w-full h-full"
						autoFocus
						value={channelName}
						onChange={(e) => setChannelName(e.target.value)}
						type="text"
						name="channelName"
					/>
					<button
						className="flex justify-center items-center border-[1px] hover:bg-gray-200 border-black rounded w-full h-full"
						type="submit">
						Create
					</button>
				</form>
			)) || (
				<button
					className="flex hover:bg-gray-200 w-full h-full transition-all duration-[350]"
					type="button"
					onClick={(e) => setShowCreateChannel(true)}>
					<img
						className="flex p-16 w-full h-full"
						src="/images/plus.svg"
						alt="plus"
					/>
				</button>
			)}
		</li>
	);
}

