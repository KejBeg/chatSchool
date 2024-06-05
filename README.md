# chatSchool

- A simple chat application using Next.js, Socket.io, and Auth0

- QR code to the site hosted on https://heroku.com

![QR Code](https://api.qrserver.com/v1/create-qr-code/?data=https://chat-school-4346e788f03e.herokuapp.com/&)

https://chat-school-4346e788f03e.herokuapp.com

## Installation

- Install all the neccessary dependencies

```bash
npm install
```

- Create a `.env` file in the root directory and add the following environment variables
- Dont forget to populate them with your own values

```bash
AUTH0_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_ISSUER_BASE_URL=
AUTH0_M2M_TOKEN=
AUTH0_SECRET=
DB_DATABASE=
DB_HOST=
DB_PASSWORD=
DB_PORT=
DB_USER=
NEXT_ACCESS_TOKEN_CLIENT_ID=
NEXT_ACCESS_TOKEN_CLIENT_SECRET=
NEXT_ACCESS_TOKEN_GRANT_TYPE=
NEXT_PUBLIC_AUTH0_DOMAIN=
```

## Usage

### Development Server

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- The page will reload if you make edits.

### Production Server

- Build the project

```bash
npm run build
```

- Start the server

```bash
npm run start
```

