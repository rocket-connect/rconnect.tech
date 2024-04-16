# rconnect.tech

Frontend &amp; Backend For www.rconnect.tech

## Frontend

React app built with Typescript & Tailwind.

## Backend

Node.js express server serving the frontend and handling the API requests to the `/contact` endpoint.

## Getting Started

The repo is **not** managed by a monorepo at this time.

For dev you mostly only need to run the frontend, the backend is only used in Digital Ocean.

#### Running DEV

Run the Webpack dev server on.

```
cd ./frontend
npm i
npm run dev
```

#### Simulating Production

To simulate the production environment, you can setup and run the express server.

```
cd ./frontend
npm run build # Build the client dist first

cd ../backend
npm run build
npm run start
```
