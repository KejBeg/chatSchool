// Module Imports

// Tool Imports

// Component Imports
import ChatWindow from '/components/chatWindow';
import ChatInput from '/components/chatInput';

export default function Page({ params }) {
	const currentChannelID = params.channel;
	return (
		<>
			<ChatWindow currentChannelID={currentChannelID} />
			<ChatInput currentChannelID={currentChannelID} />
		</>
	);
}

