'use client';

// Module Imports
import { useRef, useEffect, useState } from 'react';

// Tool Imports

// Component Imports
import ChatError from '/components/chatError';

export default function ChatWindow({ currentChannelID, messageList, messageState }) {
	// State Variables
	const [amountOfLoads, setAmountOfLoads] = useState(0);

	// Ref Variables
	const ulRef = useRef(null);

	// Scrolls down only on the first load
	useEffect(() => {
		if (!ulRef.current || messageState != 'loaded') return;

		// if (ulRef.current.scrollTop == ulRef.current.scrollHeight || amountOfLoads == 0) {
		ulRef.current.scrollTop = ulRef.current.scrollHeight;
		// }
		setAmountOfLoads(amountOfLoads + 1);
	}, [messageList]);

	if (messageState == 'loading') {
		return <ChatError message={'Loading messages...'} />;
	} else if (messageState == 'noMessages') {
		return <ChatError message={'No messages have been sent yet, be the first one'} />;
	} else if (messageState == 'error') {
		return <ChatError message={'There was an error loading messages, please try reloading'} />;
	}

	return (
		<div id="chat-window-list-container">
			<ul ref={ulRef}>
				{messageList.map((message, i) => (
					<li key={i}>
						<span className="message-ownerName">{message.ownerName}</span>
						<span>:</span>
						<span className="message-text">{message.message}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

