const express = require('express');
const env = require('dotenv');
const { DEFAULT_PORT } = require('./constants/configure');
const { todoRouter, healthRouter } = require('./routers');

const app = express();
env.config();
const port = process.env.PORT || DEFAULT_PORT;

const TODO_ROUTE = '/todo';
const HEALTH_ROUTE = '/health';

app.use(express.json());

app.use(TODO_ROUTE, todoRouter);
app.use(HEALTH_ROUTE, healthRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
