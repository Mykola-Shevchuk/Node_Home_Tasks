const http = require('http');
const port = 8000;
const fs = require('fs');
const path = require('path');
const { minNumber } = require('math-lesson-2');

const requestHandler = (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Request-Method', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, GET');
  response.setHeader('Access-Control-Allow-Headers', '*');

  if (request.method === 'POST' && request.url === '/min') {
    request.on('data', (data) => {
      const parsedData = data
        .toString()
        .split(',')
        .map(item => parseFloat(item))
        .filter(item => !isNaN(item));

      response.end(`${minNumber(parsedData)}`);
    });
  }

  if (request.method === 'GET' && request.url === '/files') {
    fs.readdir(path.join(__dirname), (err, files) => {
      if (err) throw Error;

      const list = files.join(',');

      response.end(`${list}`);
    });
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
});
