// Imports
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { setupDatabase } from './tools/database.js';
import next from 'next';
import cors from 'cors';

// Create constants for the environment variables
const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

// Create the Next.js app
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

// Prepare the Next.js app
app.prepare().then(() => {
	const httpServer = createServer((req, res) => {
		// Enable CORS for all routes
		cors()(req, res, (err) => {
			if (err) {
				console.error(err);
				return;
			}

			// Pass the request to the next middleware (Next.js request handler in this case)
			handler(req, res);
		});
	});

	const io = new Server(httpServer, {
		cors: {
			origin: '*',
		},
	});

	// Setup the database
	setupDatabase();

	// This handles the instant message sending
	io.on('connection', (socket) => {
		socket.on('sendMessage', (messageObject) => {
			io.emit('messageSent', messageObject);
		});
	});

	httpServer
		.once('error', (err) => {
			console.error(err);
			process.exit(1);
		})
		.listen(port, () => {
			console.log(`> Ready on http://${hostname}:${port}`);
		});
});

