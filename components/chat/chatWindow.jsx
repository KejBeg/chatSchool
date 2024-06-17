'use client';

// Module Imports
import { useRef, useEffect, useState } from 'react';

// Tool Imports

// Component Imports
import ChatError from '/components/chat/chatError';

export default function ChatWindow({ channelID, messageList, messageState, ulRef }) {
	// State Variables
	const [amountOfLoads, setAmountOfLoads] = useState(0);

	// Scrolls down only on the first load
	useEffect(() => {
		if (!ulRef.current || messageState != 'loaded') return;

		ulRef.current.scrollTop = ulRef.current.scrollHeight;
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
		<>
			{messageList.map((message, i) => (
				<li key={i}>
					<span className="">{message.ownerName}</span>
					<span className="m-1">:</span>
					<span className="">{message.message}</span>
				</li>
			))}
		</>
	);
}

