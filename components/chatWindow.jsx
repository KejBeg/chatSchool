'use client';

// Module Imports
import { useRef, useEffect } from 'react';

// Tool Imports

// Component Imports
import LoadingMessages from '/components/loadingMessages';
import NoMessages from './noMessages';

export default function ChatWindow({ currentChannelID, messageList, messageState }) {
	// Ref Variables
	const ulRef = useRef(null);

	// Scrolls down only on the first load
	useEffect(() => {
		if (ulRef.current && messageState == 'loaded') {
			ulRef.current.scrollTop = ulRef.current.scrollHeight;
		}
	}, []);

	if (messageState == 'loading') {
		return <LoadingMessages />;
	} else if (messageState == 'noMessages') {
		return <NoMessages />;
	}

	return (
		<div id="chat-window-list-container">
			<ul ref={ulRef}>
				{messageList.map((message, i) => (
					<li key={i}>
						<span className="message-ownerName">{message.ownerName}</span>:
						<span className="message-text">{message.message}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

