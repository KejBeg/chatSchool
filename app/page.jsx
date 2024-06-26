'use client';

// Module Imports
import { useContext, useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

// Tool Imports
import myContext from '/contexts/mainContextProvider';

// Style Imports
import styles from '/public/styles/channelSelectionPage.css';

// Component Imports
import ChannelList from '/components/channelList.jsx';
import ChannelCreation from '/components/channelCreation.jsx';

export default function Page() {
	// State Variables
	const [refreshChannels, setRefreshChannels] = useState(false);
	const [channels, setChannels] = useState([]);
	const [channelsState, setChannelsState] = useState('loading');

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

	return (
		<ul id="channel-list">
			<ChannelList
				channels={channels}
				user={user}
				userToken={userToken}
				channelsState={channelsState}
			/>
			{(channelsState == 'loaded' || channelsState == 'noChannels') && (
				<ChannelCreation
					refreshChannels={refreshChannels}
					setRefreshChannels={setRefreshChannels}
					userToken={userToken}
				/>
			)}
		</ul>
	);
}

