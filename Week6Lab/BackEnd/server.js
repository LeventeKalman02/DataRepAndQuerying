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

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test'); if your database has auth enabled
}

//adding the book to the cloud database
const bookSchema = new mongoose.Schema({
  title:String,
  cover:String,
  author:String
});

//delete data from db based on id
app.delete('/api/books/:id', async(req, res) =>{
  console.log("Delete: "+req.params.id);
  
  let book = bookModel.findByIdAndDelete(req.params.id);
  res.send(book);
});

//edit data in the database based off of id
app.put('/api/books/:id', async(req, res) =>{
  console.log("Update: "+req.params.id);

  let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(book);
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

//get all the records from database and set it to books variable asyncronously
app.get('/api/books', async(req, res) =>{

    //search database and bring back all records
    let books = await bookModel.find({});
    res.json(books);
});

//get a single record from the database based off the id
app.get('/api/books/:id', async(req, res) =>{
  	console.log(req.params.id);    
    let book = await bookModel.findById(req.params.id);
    res.json(book);
});

//listen for requests coming in
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});