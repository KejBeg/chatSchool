'use client';

// Module Imports
import { useContext, useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

// Tool Imports
import myContext from '/contexts/mainContextProvider';

// Style Imports
import styles from '/public/styles/channelSelection.css';

// Component Imports
import LoadingChannels from '/components/loadingChannels.jsx';
import ChannelPage from '/components/channelPage.jsx';
import ChannelPageCreation from '/components/channelPageCreation.jsx';

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

	// Handling error states
	if (channelsState == 'loading') {
		return <LoadingChannels />;
	}

	if (channelsState == 'noChannels' || channelsState == 'error') {
		return <div>Error loading channels</div>;
	}

	return (
		<ul id="channel-list">
			<ChannelPage
				channels={channels}
				user={user}
				userToken={userToken}
			/>
			<ChannelPageCreation
				refreshChannels={refreshChannels}
				setRefreshChannels={setRefreshChannels}
				userToken={userToken}
			/>
		</ul>
	);
}

