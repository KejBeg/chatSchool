'use client';

// Module Imports
import { useEffect, useState, useContext } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

// Tool Imports
import mainContext from '/contexts/mainContextProvider';

// Component Imports

export default function chatInput({ currentChannelID, messageState }) {
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

		// let creation_datetime = new Date();
		let creation_datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');

		// Emitting the message
		if (user && socket) {
			socket.emit('sendMessage', {
				channelID: currentChannelID,
				owner: user.sub,
				ownerName: user.name,
				message,
				creation_datetime,
			});
		}

		let response = await fetch('/api/messageManagement/addMessage', {
			method: 'POST',
			headers: {
				authorization: userToken,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message, channelID: currentChannelID, creation_datetime }),
		});
	};

	// If the messages are loading, return nothing
	if (messageState == 'loading') {
		return <></>;
	}

	return (
		<div className="flex justify-center items-center m-5 p-5 w-full h-full">
			<form
				onSubmit={(e) => handleSubmit(e)}
				className="flex justify-center items-center w-full h-[50%]">
				<input
					className="bg-gray-200 p-3 border-none rounded-lg w-full h-full"
					autoFocus
					type="text"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				{/* TODO */}
				{/* <button type="submit">
					<img
						src="/images/send.svg"
						alt="send"
					/>
				</button> */}
			</form>
		</div>
	);
}

