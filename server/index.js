const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const router = require('./routes/router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '../dist')));
app.use('/api', router);

app.get('/api', (req, res) => {
  return res.status(200).json();
});

app.get('/', (req, res) => {
 return res.status(200).send(path.join(__dirname, '../index.html'));
});
app.get('*',(req, res) => res.status(404).send('This is not the page you\'re looking for...'));
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});