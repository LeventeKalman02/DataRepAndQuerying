const express = require('express');
const app = express();
const port = 4000;

//setting the path of the build to the server
const path = require('path');
app.use(express.static(path.join(__dirname, '../book/build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

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

//adds ability to add books and query them
const bookModel = mongoose.model('books', bookSchema);

//delete data from db based on id
app.delete('/api/books/:id', async(req, res) =>{
  console.log("Delete: "+req.params.id);

  let book = bookModel.findByIdAndDelete(req.params.id);
  res.send(book);
});

//edit data in the database based off of id
app.put('/api/book/:id', async(req, res) =>{
  console.log("Update: "+req.params.id);

  let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(book);
});

//used to parse the body of a http request
//gets the data from create when details are entered and output to console
app.post('/api/book', (req, res) =>{
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

app.get('/api/book/:identifier',async (req,res)=>{
  console.log(req.params.identifier);
  let book = await bookModel.findById(req.params.identifier);
  res.send(book);
})

//adds the local build to the server so the build now runs on localhost:4000
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../book/build/index.html'));
});

//listen for requests coming in
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});