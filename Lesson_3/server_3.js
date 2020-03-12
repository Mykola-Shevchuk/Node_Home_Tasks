const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 8000;

let users = [{id: 1, name: 'Vasya', surname: 'Pupkin'}];

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/all-users', (req, res) => {
  res.status(200).json({
    users
  });
});

app.post('/add-user', (req, res) => {
  users.push({...req.body, id: Math.ceil(Math.random() * 100)});

  res.status(200).json({
    message: `User with name ${req.body.name} and surname ${req.body.surname} was created`,
  })
});

app.put('/update-user/:id', (req, res) => {

  users = users.map(item => {
    if (item.id  === Number(req.params.id)) {
      return {
        ...item,
        name: req.body.name,
        surname: req.body.surname,
      }
    }

    return item;
  });

  console.log(users);

  res.status(200).json({
    message: `User with name ${req.body.name} and surname ${req.body.surname} was updated!`,
  })
});

app.delete('/delete-user/:id', (req, res) => {
  const isValidId = users.some(item => item.id === Number(req.params.id));

  if (isValidId) {
    users = users.filter(item => item.id  !== Number(req.params.id));

    res.status(200).json({
      message: `User with ID ${req.params.id} was deleted!`,
    })
  } else {
    res.status(404).json({
      message: `User with ID ${req.params.id} not found!`,
    })
  }

});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
