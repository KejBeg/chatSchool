'use client';

// Module Imports
import { useEffect, useState, useContext } from 'react';

// Tool Imports
import mainContext from '/contexts/mainContextProvider';

// Component Imports

export default function ChatWindow({ currentChannelID }) {
	// State Variables
	const [messageList, setMessageList] = useState([]);

	// Context Variables
	const { userToken, socket, isConnected, transport } = useContext(mainContext);

	// Socket useEffect
	useEffect(() => {
		// New message
		if (!socket) return;
		socket.on('messageSent', (messageObject) => {
			let newMessageList = [...messageList];
			messageObject.id = newMessageList.length + 1;
			delete messageObject.currentChannelID;

			newMessageList.push(messageObject);
			setMessageList(newMessageList);
		});
	});

	useEffect(() => {
		// Getting the messages
		(async () => {
			// Only refresh messages if the refreshMessages state is true and userToken is present
			if (!userToken) return;

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
		})();
	}, [userToken]);

	// Checking if the message list is present
	if (messageList.length <= 0) {
		// TODO
		return <>Loading</>;
	}

	return (
		<ul>
			<button onClick={() => console.log(messageList[messageList.length - 1].id)}>test</button>
			{messageList.map((message) => (
				<li key={message.id}>
					{message.ownerName}:{message.message}
				</li>
			))}
		</ul>
	);
}

