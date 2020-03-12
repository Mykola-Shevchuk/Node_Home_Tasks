const express = require('express');
const app = express();
const port = 8000;

app.use((req, res) => {
  res.send(`HTTP Method: ${req.method}`);
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
