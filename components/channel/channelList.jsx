// Module Imports
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Component Imports
import ChannelsError from '/components/channel/channelsError';

export default function ChannelPage({
	refreshChannels,
	setRefreshChannels,
	currentChannelID,
	channelsState,
	setChannelsState,
	userToken,
	user,
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
					key={channel.id}
					id={(channel.id == currentChannelID && 'active-channel') || ''}>
					<Link href={`/channels/${channel.id}`}>{channel.name}</Link>
					<button
						type="button"
						onClick={(e) => copyChannelInvite(channel.id)}>
						<img
							src="/images/copy.svg"
							alt="copy"
						/>
					</button>
					{channel.owner === user.sub && (
						<button
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

