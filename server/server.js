const express = require('express');
const bodyParser = require('body-parser');
const routes = 'routes/routes.js';
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const app = express();
const router = express.Router();
const connectionString = 'mongodb+srv://admin:zerosuit@cluster0.eo59c.mongodb.net/?retryWrites=true&w=majority';

// //middleware
// app.use(bodyParser.json());
// app.use(cors())
// const posts = require('./routes/api/posts.js')
// app.use('/api/posts', posts);
// app.listen(3000);

// MongoClient.connect(connectionString, {
//   useUnifiedTopology: true
// }, (err, client) => {
//   if (err) return console.error(err);
//   console.log("*hacker voice* I'm in");
// })

MongoClient.connect(connectionString, { useUnifiedTopology:
  true})
  .then(client => {
    console.log("*Hacker voice* I'm in >:)")
    const db = client.db('ArtCall')
    const artStyles = db.collection('artStyles')
    
    app.use(bodyParser.urlencoded({extended: true}))

    app.post('/artStyles', (req, res) =>{
      artStyles.insertOne(req.body)
      .then(result => {
        res.redirect('/')
      })
      .catch(error => console.error(error))
    })

    app.get('/', (req, res) => {
      db.collection('artStyles').find().toArray()
        .then(results => {
          console.log(results)
        })
        .catch(error => console.error(error))
      // const cursor = db.collection('artStyles').find()
      // console.log(cursor)
      res.sendFile(__dirname + '/views/index.html');
    app.set('view engine', 'ejs')
    });

    app.listen(3000, function(){
      console.log('listening on 3000');
    });
  })
  .catch(error => console.error(error))


// async function loadPostsCollection() {
//   var client = await mongodb.MongoClient.connect(connectionString)
// }

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/views/index.html');
// });

// module.exports = router;