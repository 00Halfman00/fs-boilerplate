const express = require('express');
const app = express(); //initialize app
const morgan = require('morgan'); //require morgan|volleyball, path packages
const {db} = require('./db'); //require db from /db
const path = require('path');


app.use(morgan('dev')); //use morgan|volleyball
app.use(require('body-parser').json()); //use express.json()
app.use(express.static(path.join(__dirname, '..', 'public'))); //use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!

//require in your routes and use them on your api path




app.use((req, res, next) => {
  //404 handler
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  //500 handler
  res.status(err.status || 500);
  res.send(err.message || 'Internal server error');
});





const port = process.env.PORT || 5000; //set PORT

const init = async () => {
  //listen
  try {
    app.listen(port, () => {
      //await db.syncAndSeed();
      console.log(`listening on: ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

init();