import { createServer } from 'node:http';
import next from 'next';
import { Server } from 'socket.io';
import { setupDatabase } from './tools/database.js';
import cors from 'cors';

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

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

