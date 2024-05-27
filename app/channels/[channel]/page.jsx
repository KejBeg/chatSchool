// Module Imports

// Tool Imports

// Component Imports
import ChatWindow from '/components/chatWindow';
import ChatInput from '/components/chatInput';

// Style Imports
import styles from '/public/styles/chat.css';
import { Suspense } from 'react';

export default function Page({ params }) {
	const currentChannelID = params.channel;
	return (
		<>
			<ChatWindow currentChannelID={currentChannelID} />
			<ChatInput currentChannelID={currentChannelID} />
		</>
	);
}

