const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global
  .user = require('./models/userModel')
  .commission = require('./models/commissionModel')
  .card = require('./models/cardModel');
  
const routes = require('./routes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  'mongodb+srv://admin:zerosuit@cluster0.eo59c.mongodb.net/ArtCall?retryWrites=true&w=majority',
   { useNewUrlParser: true, useUnifiedTopology: true }
  ).then(() => {
    console.log('Database Connected')
  },
  error => {
    console.log("Database couldn't be connected")
  });

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);