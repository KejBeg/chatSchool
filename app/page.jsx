'use client';

import { useEffect, useState, useContext } from 'react';
import mainContext from '/contexts/mainContextProvider';

export default function Home() {
	const { socket } = useContext(mainContext);

	useEffect(() => {
		// if (socket.connected) {
		// 	onConnect();
		// }
		// function onConnect() {
		// 	setIsConnected(true);
		// 	setTransport(socket.io.engine.transport.name);
		// 	socket.io.engine.on('upgrade', (transport) => {
		// 		setTransport(transport.name);
		// 	});
		// }
		// function onDisconnect() {
		// 	setIsConnected(false);
		// 	setTransport('N/A');
		// }
		// socket.on('connect', onConnect);
		// socket.on('disconnect', onDisconnect);

		if (socket) {
			socket.on('refreshMessages', (value) => {
				console.log(value);
			});
		}
	});

	return (
		<div>
			<div>{socket && ((socket.connected && 'true') || 'false')}</div>
			<button onClick={() => socket.emit('refreshMessages', 1)}></button>
		</div>
	);
}

