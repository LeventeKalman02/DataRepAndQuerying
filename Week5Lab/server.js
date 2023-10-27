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

//the url is localhost:4000/hello
app.get('/hello', (req, res) =>{
    res.send("Hello");
});

//listen for requests coming in
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});