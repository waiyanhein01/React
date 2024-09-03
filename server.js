// server.js

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('tasks.json'); // Your JSON file containing data
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router); // Set your API base route

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  `JSON Server is running on port ${PORT}`;
});
