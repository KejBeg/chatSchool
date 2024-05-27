'use client';

// Module Imports
import { useEffect, useState, useContext } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

// Tool Imports
import mainContext from '/contexts/mainContextProvider';

// Component Imports

export default function chatInput({ currentChannelID }) {
	// State Variables
	const [message, setMessage] = useState('');

	// Context Variables
	const { userToken, socket, isConnected, transport } = useContext(mainContext);

	// Auth0 Variables
	const { user } = useUser();

	const handleSubmit = async (event) => {
		event.preventDefault();

		// Resetting the message
		setMessage('');

		// let created_at = new Date();
		let created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');

		// Emitting the message
		if (user && socket) {
			socket.emit('sendMessage', {
				channelID: currentChannelID,
				owner: user.sub,
				ownerName: user.name,
				message,
				created_at,
			});
		}

		let response = await fetch('/api/messageManagement/addMessage', {
			method: 'POST',
			headers: {
				authorization: userToken,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message, channelID: currentChannelID, created_at }),
		});
	};

	return (
		<div id="chat-input-container">
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					hidden={!message}
					type="submit">
					<img
						hidden={!message}
						src="/images/send.svg"
						alt="send"
					/>
				</button>
			</form>
		</div>
	);
}

