'use client';

// Module Imports
import { useEffect, useState, useContext } from 'react';

// Tool Imports
import mainContext from '/contexts/mainContextProvider';

// Component Imports

export default function chatInput({ currentChannelID }) {
	// State Variables
	const [message, setMessage] = useState('');

	// Context Variables
	const { userToken, socket, isConnected, transport } = useContext(mainContext);

	const handleSubmit = async (event) => {
		event.preventDefault();

		// Resetting the message
		setMessage('');

		let response = await fetch('/api/messageManagement/addMessage', {
			method: 'POST',
			headers: {
				authorization: userToken,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message, channelID: currentChannelID }),
		});

		// Emitting the message
		if (response.ok) socket.emit('refreshMessages', currentChannelID);
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<input
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button type="submit">Send</button>
		</form>
	);
}

