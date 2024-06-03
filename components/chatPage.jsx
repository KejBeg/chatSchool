'use client';

// Module Imports
import { useEffect, useState, useContext } from 'react';

// Tool Imports
import mainContext from '/contexts/mainContextProvider';

// Component Imports
import ChatWindow from '/components/chatWindow';
import ChatInput from '/components/chatInput';

// Style Imports
import styles from '/public/styles/chatPage.css';

export default function ChatPage({ params }) {
	const currentChannelID = params.channel;

	// State Variables
	const [messageList, setMessageList] = useState([]);
	const [messageState, setMessageState] = useState('loading');

	// Context Variables
	const { userToken, socket } = useContext(mainContext);

	// Socket useEffect
	useEffect(() => {
		// New message handling
		if (!socket) return;
		socket.on('messageSent', (messageObject) => {
			if (messageObject.channelID != currentChannelID) return;

			let newMessageList = [...messageList];

			newMessageList.push(messageObject);
			setMessageList(newMessageList);
			setMessageState('loaded');
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
			if (!response.ok) {
				setMessageState('error');
				return;
			}

			// Getting data from response
			let data = await response.json();

			setMessageList(data);
			setMessageState('loaded');

			// Scroll to the bottom of the chat window
		})();
	}, [userToken]);

	// Checking if the message list is present
	if (messageList.length <= 0 && messageState == 'loaded') {
		setMessageState('noMessages');
	}

	return (
		<div id="chat-page">
			<ChatWindow
				currentChannelID={currentChannelID}
				messageList={messageList}
				messageState={messageState}
			/>
			<ChatInput
				currentChannelID={currentChannelID}
				messageList={messageList}
				messageState={messageState}
			/>
		</div>
	);
}

