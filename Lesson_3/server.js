const express = require('express');
const app = express();
const port = 8000;

const NODE_MAJOR_VERSION = process.versions.node.split('.')[0];


app.get('/', (req, res) => {
  res.send(`Tour current version of Node.js: ${NODE_MAJOR_VERSION}`);
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
