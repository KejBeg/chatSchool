// Module Imports
import { useContext, useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

// Tool Imports
import myContext from '/contexts/mainContextProvider';

// Style Imports
import '/public/styles/channelPage.css';

// Component Imports
import ChannelList from './channelList';
import ChannelCreation from './channelCreation';
import Profile from '/components/sidebar/profile';

export default function ChannelPage({ channelID, setChannelID }) {
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
		<div className="grid grid-rows-[9fr,2fr] border border-black w-full h-screen">
			<ul className="grid grid-rows-[auto,1fr] p-2 overflow-x-hidden overflow-y-auto">
				<ChannelList
					channelID={channelID}
					setRefreshChannels={setRefreshChannels}
					refreshChannels={refreshChannels}
					setChannelsState={setChannelsState}
					channels={channels}
					user={user}
					userToken={userToken}
					channelsState={channelsState}
					setChannelID={setChannelID}
				/>
				<ChannelCreation
					refreshChannels={refreshChannels}
					setRefreshChannels={setRefreshChannels}
					userToken={userToken}
				/>
			</ul>
			<Profile user={user} />
		</div>
	);
}

