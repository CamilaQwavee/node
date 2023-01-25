const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

console.log(__dirname);

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + 'about.html');
});

app.get('/contact-me', (req, res) => {
  res.sendFile(__dirname + 'contact-me.html');
});

app.use((req, res) => {
  res.status(404).sendFile(__dirname + '404.html');
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});