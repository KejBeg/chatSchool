'use client';

// Module Imports
import { useContext, useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

// Tool Imports
import myContext from '/contexts/mainContextProvider';

// Style Imports
import '/public/styles/channelSelectionPage.css';

// Component Imports
import ChannelList from '/components/channel/channelList.jsx';
import ChannelCreation from '/components/channel/channelCreation';

export default function Page() {
	// State Variables
	const [refreshChannels, setRefreshChannels] = useState(false);
	const [channelsState, setChannelsState] = useState('loading');

	// Auth0 Variables
	const { user, isLoading, error } = useUser();

	// Context Variables
	const { userToken } = useContext(myContext);

	return (
		<ul id="channel-list">
			<ChannelList
				refreshChannels={refreshChannels}
				setRefreshChannels={setRefreshChannels}
				channelsState={channelsState}
				setChannelsState={setChannelsState}
				userToken={userToken}
				user={user}
				currentChannelID={null}
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

