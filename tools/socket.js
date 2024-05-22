'use client';

import { io } from 'socket.io-client';

export const socket = io();

// LEGACY CODE
// export function onSocketConnect(setIsConnected, setTransport) {
// 	setIsConnected(true);
// 	setTransport(socket.io.engine.transport.name);

// 	socket.io.engine.on('upgrade', (transport) => {
// 		setTransport(transport.name);
// 	});

// 	socket.emit('test', 'test message');
// 	socket.on('test', (value) => {
// 		console.log(value);
// 	});
// }

// export function onSocketDisconnect(setIsConnected, setTransport) {
// 	setIsConnected(false);
// 	setTransport('N/A');
// }

// export function socketHandling(setIsConnected, setTransport) {
// 	if (socket.connected) {
// 		onSocketConnect(setIsConnected, setTransport);
// 	}

// 	socket.on('connect', () => onSocketConnect(setIsConnected, setTransport));
// 	socket.on('disconnect', () => onSocketDisconnect(setIsConnected, setTransport));
// }

// export function emitSocket(eventName, data = null) {
// 	socket.emit(eventName, data);
// }

// export function onSocket(eventName, callback) {
// 	socket.on(eventName, callback);
// }

// export function offSocket() {
// 	return () => {
// 		socket.off('connect', onSocketConnect);
// 		socket.off('disconnect', onSocketDisconnect);
// 	};
// }

