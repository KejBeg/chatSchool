// Module Imports
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Component Imports
import ChannelsError from './channelsError';

export default function ChannelPage({
	refreshChannels,
	setRefreshChannels,
	channelID,
	channelsState,
	setChannelsState,
	userToken,
	user,
	setChannelID,
}) {
	// State Variables
	const [channels, setChannels] = useState([]);

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
			if (!response.ok) {
				setChannelsState('error');
				return;
			}

			let data = await response.json();

			if (data.length === 0) {
				setChannelsState('noChannels');
				return;
			}

			setChannels(data);
			setChannelsState('loaded');
		})();
	}, [userToken, refreshChannels]);

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

	const copyChannelInvite = async (channelID) => {
		// Check if user token is available
		if (!userToken) return;

		// Copy the channel invite
		let response = await fetch('/api/channelManagement/getChannelInvite', {
			method: 'POST',
			headers: {
				authorization: userToken,
			},
			body: JSON.stringify({ channelID }),
		});

		if (!response.ok) {
			return;
		}

		let data = await response.json();
		let invite = data.invite;
		let url = window.location.origin + '/invite/' + invite;

		navigator.clipboard.writeText(url);
	};

	if (channelsState === 'loading') {
		return <ChannelsError message="Loading Channels..." />;
	} else if (channelsState === 'error') {
		return <ChannelsError message="Error Loading Channels" />;
	} else if (channelsState === 'noChannels') {
		return <ChannelsError message="No Channels Found" />;
	}

	return (
		<>
			{channels.map((channel) => (
				<li
					className={`flex border-[1px] border-black rounded w-full h-[20vh] ${
						channelID === channel.id ? 'bg-gray-400' : ''
					}`}
					key={channel.id}>
					<button
						onClick={(e) => setChannelID(channel.id)}
						className="flex justify-center items-center hover:bg-gray-200 w-full h-full transition-all duration-[350]">
						{channel.name}
					</button>
					<button
						className="flex justify-end items-center hover:bg-gray-200 w-16 h-full transition-all duration-[350]"
						type="button"
						onClick={(e) => copyChannelInvite(channel.id)}>
						<img
							className="w-9 h-9"
							src="/images/copy.svg"
							alt="copy"
						/>
					</button>
					{channel.owner === user.sub && (
						<button
							className="flex justify-end items-center bg-red-500 hover:bg-red-700 w-16 h-full transition-all duration-[350]"
							type="button"
							onClick={(e) => deleteChannel(channel.id)}>
							<img
								src="/images/trash.svg"
								alt="trash"
							/>
						</button>
					)}
				</li>
			))}
		</>
	);
}

