// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('tasks.json'); // Your JSON file name
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
