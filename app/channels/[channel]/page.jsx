'use client';

// Module Imports

// Tool Imports

// Style Imports
import channel from '/public/styles/channel.css';

// Component Imports
import ChannelPage from '/components/channelPage.jsx';
import ChatPage from '/components/chatPage';
import UsersPage from '/components/usersPage';

export default function Page({ params }) {
	const currentChannelID = params.channel;

	return (
		<>
			<ChannelPage />
			<ChatPage params={params} />
			<UsersPage params={params} />
		</>
	);
}

