const express = require('express');
const app = express();
const port = 4000;

//add cors to the server
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

//npm i body-parser
//configure body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@leventekalman.bwavlir.mongodb.net/MYDB?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//adding the book to the cloud database
const bookSchema = new mongoose.Schema({
  title:String,
  cover:String,
  author:String
});

//adds ability to add books and query them
const bookModel = mongoose.model('books', bookSchema);


//used to parse the body of a http request
//gets the data from create when details are entered and output to console
app.post('/api/books', (req, res) =>{
  //callback function
    console.log(req.body);
    //writing data to the database
    bookModel.create({
      title: req.body.title,
      cover: req.body.cover,
      author: req.body.author
    })
    .then(()=>{res.send("Book added successfully")})
    .catch(()=>(res.send("Error adding book")));
});



//listening at local host 4000 for http request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//get the book array and display it
app.get('/api/books', (req, res) =>{
    const books = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
    ];

    res.json({
        myBooks:books,
        "Message":"Some information",
        "Status":"Happy"
    });
});

//listen for requests coming in
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});