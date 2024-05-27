'use client';

// Module Imports
import { useEffect, useState, useContext, useRef } from 'react';

// Tool Imports
import mainContext from '/contexts/mainContextProvider';

// Component Imports
import NoMessages from '/components/noMessages';
import LoadingMessages from '/components/loadingMessages';

export default function ChatWindow({ currentChannelID }) {
	// State Variables
	const [messageList, setMessageList] = useState([]);
	const [messagesLoaded, setMessagesLoaded] = useState(false);

	// Ref Variables
	const ulRef = useRef(null);

	// Context Variables
	const { userToken, socket, isConnected, transport } = useContext(mainContext);

	// Socket useEffect
	useEffect(() => {
		// New message
		if (!socket) return;
		socket.on('messageSent', (messageObject) => {
			if (messageObject.channelID != currentChannelID) return;

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
			setMessagesLoaded(true);

			// Scroll to the bottom of the chat window
		})();
	}, [userToken]);

	// Scrolls down only on the first load
	useEffect(() => {
		if (ulRef.current) {
			ulRef.current.scrollTop = ulRef.current.scrollHeight;
		}
	}, [messagesLoaded]);

	// Checking if the message list is present
	if (!messagesLoaded) {
		return <LoadingMessages />;
	} else if (messageList.length <= 0 && messagesLoaded) {
		return <NoMessages />;
	}

	return (
		<div id="chat-window-list-container">
			<ul ref={ulRef}>
				{messageList.map((message) => (
					<li key={message.id}>
						<span className="message-ownerName">{message.ownerName}</span>:
						<span className="message-text">{message.message}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

