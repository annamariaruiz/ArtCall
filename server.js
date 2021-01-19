const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

global.User = require('./api/models/userModel')
const routes = require('./api/routes/userRoutes')
const connectionString = 'mongodb+srv://admin:zerosuit@cluster0.eo59c.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false)
mongoose.connect(connectionString, { useNewUrlParser: true });

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json)

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({url: `${req.originalUrl} not found`})
})

console.log(`Server started on port ${port}`)