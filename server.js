const path = require('path');
const express = require('express');
const jsonServer = require('json-server');
const app = express();
const router = jsonServer.router('tasks.json');

app.use('/api', router);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT)
