/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

import { ApiResponse, API_URL } from '@nx-hello/api-interface';

const app = express();

app.get(API_URL, (_, res) => {
  res.send({ message: 'Welcome from api server!' } as ApiResponse);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}${API_URL}`);
});
server.on('error', console.error);
