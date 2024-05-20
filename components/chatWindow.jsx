'use client';

// Module Imports
import { useEffect, useState, useContext } from 'react';

// Tool Imports
import mainContext from '/contexts/mainContextProvider';

// Component Imports

export default function ChatWindow({ currentChannelID }) {
	// State Variables
	const [messageList, setMessageList] = useState([]);
	const [isSocketConnected, setIsSocketConnected] = useState(false);
	const [socketTransport, setSocketTransport] = useState('');

	// Context Variables
	const { userToken } = useContext(mainContext);

	// test

	useEffect(() => {
		// Getting the messages
		(async () => {
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
		})();
	}, [userToken]);

	// Checking if the message list is present
	if (messageList.length <= 0) {
		// TODO
		return <>Loading</>;
	}

	return (
		<ul>
			{messageList.map((message) => (
				<li key={message.id}>
					{message.ownerName}:{message.message}
				</li>
			))}
		</ul>
	);
}

