'use client';

import { useState } from 'react';
import ChannelPage from '../components/sidebar/channelPage';
import ChatPage from '/components/chat/chatPage';
import UsersPage from '/components/users/usersPage';

export default function Page() {
	const [channelID, setChannelID] = useState(1);

	return (
		<div className="grid grid-cols-[1fr,3fr,1fr] w-full h-screen overflow-hidden">
			<ChannelPage
				channelID={channelID}
				setChannelID={setChannelID}
			/>
			<ChatPage channelID={channelID} />
			<UsersPage channelID={channelID} />
		</div>
	);
}

