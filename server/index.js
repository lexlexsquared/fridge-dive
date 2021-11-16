const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const router = require('./routes/router');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};
const spoon = '50ee2b8c28ee4cb9b9863b12923af92d';
//GET https://api.spoonacular.com/recipes/complexSearch

app.use(express.static(DIST_DIR));
app.use('/api', router);

app.get('/api', (req, res) => {
  res.send(mockResponse);
});

app.get('/', (req, res) => {
 res.status(200).send(HTML_FILE);
});

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