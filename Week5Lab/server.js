const express = require('express');
const app = express();
const port = 4000;

//listening at local host 4000 for http request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//the url is localhost:4000/datarep
app.get('/datarep', (req, res) => {
    res.send('Welcome to dataRep and Querying!');
});

//the url is localhost:4000/hello/whatever name you want here
//the colon identifies the name as a parameter 
app.get('/hello/:name', (req, res) =>{
    res.send("Hello " + req.params.name);
});

//display the data in the array
app.get('/api/books', (req, res) =>{
    const data = [
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
        myBooks:data,
        "Message":"Hello from server.js"
    }); 
});

//send the index.html file
app.get('/test', (req, res) =>{
    //__dirname gets the current directory that we are in
    res.sendFile(__dirname+'/index.html');
})

//listen for requests coming in
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});