'use client';

// Module Imports
import { useEffect, useState, useContext } from 'react';

// Tool Imports
import mainContext from '/contexts/mainContextProvider';

// Component Imports

export default function ChatWindow({ currentChannelID }) {
	// State Variables
	const [messageList, setMessageList] = useState([]);
	const [refreshMessages, setRefreshMessages] = useState(true);

	// Context Variables
	const { userToken, socket, isConnected, transport } = useContext(mainContext);

	useEffect(() => {
		// Getting the messages
		(async () => {
			// Only refresh messages if the refreshMessages state is true and userToken is present
			if (!userToken || !refreshMessages) return;
			console.log('refreshing messages');

			const response = await fetch(`/api/messageManagement/getChannelMessages`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					authorization: userToken,
				},
				body: JSON.stringify({ channelID: currentChannelID }),
			});

			// Check if the response is ok
			if (!response.ok) return;

			// Getting data from response
			let data = await response.json();

			setMessageList(data);
			setRefreshMessages(false);
		})();

		// Checking if messages need to be refreshed
		if (!socket) return;
		socket.on('refreshMessages', (channelID) => {
			if (channelID === currentChannelID) {
				setRefreshMessages(true);
			}
		});
	});

	// Checking if the message list is present
	if (messageList.length <= 0) {
		// TODO
		return <>Loading</>;
	}

	return (
		<ul>
			<li>Loading</li>
			<li>{(isConnected && 'connect') || 'disconnect'}</li>
			<li>{transport}</li>
			{messageList.map((message) => (
				<li key={message.id}>
					{message.ownerName}:{message.message}
				</li>
			))}
		</ul>
	);
}

