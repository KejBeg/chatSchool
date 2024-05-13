'use client';

// Module Imports
import { useEffect, useState, useContext } from 'react';

// Tool Imports
import mainContext from '/contexts/mainContextProvider';

// Component Imports

export default function chatInput() {
	// State Variables
	const [message, setMessage] = useState('');

	// Context Variables
	const { userToken } = useContext(mainContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch('/api/messageManagement/addMessage', {
			method: 'POST',
			headers: {
				authorization: userToken,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message }),
		});
		setMessage('');
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

