'use client';

// Module Imports

// Tool Imports

// Style Imports
import channel from '/public/styles/channel.css';

// Component Imports
import ChannelPage from '/components/channel/channelPage';
import ChatPage from '/components/chat/chatPage';
import UsersPage from '/components/users/usersPage';

export default function Page({ params }) {
	return (
		<>
			<ChannelPage params={params} />
			<ChatPage params={params} />
			<UsersPage params={params} />
		</>
	);
}

