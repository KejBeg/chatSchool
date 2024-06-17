'use client';

// Module Imports
import { useEffect, useState, useContext, useRef } from 'react';

// Tool Imports
import mainContext from '/contexts/mainContextProvider';

// Component Imports
import ChatWindow from '/components/chat/chatWindow';
import ChatInput from '/components/chat/chatInput';

export default function ChatPage({ channelID }) {
	// State Variables
	const [messageList, setMessageList] = useState([]);
	const [messageState, setMessageState] = useState('loading');

	// Context Variables
	const { userToken, socket } = useContext(mainContext);

	// Ref Variables
	const ulRef = useRef(null);

	// Socket useEffect
	useEffect(() => {
		// New message handling
		if (!socket) return;
		socket.on('messageSent', (messageObject) => {
			if (messageObject.channelID != channelID) return;

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
				body: JSON.stringify({ channelID: channelID }),
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
	}, [userToken, channelID]);

	// Checking if the message list is present
	if (messageList.length <= 0 && messageState == 'loaded') {
		setMessageState('noMessages');
	}

	return (
		<div className="grid grid-rows[9fr,1fr] w-full h-screen">
			<ul
				ref={ulRef}
				className={`m-5 p-5 border rounded  ${
					channelID == 1 ? 'w-[80vw]' : 'w-[60vw]'
				} overflow-x-hidden overflow-y-auto`}>
				<ChatWindow
					channelID={channelID}
					messageList={messageList}
					messageState={messageState}
					ulRef={ulRef}
				/>
			</ul>
			<ChatInput
				currentChannelID={channelID}
				messageList={messageList}
				messageState={messageState}
			/>
		</div>
	);
}

