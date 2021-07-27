const express = require("express");

const fs = require("fs");

const path = require("path");
const { join } = require("path/win32");


// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 5000

// express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

//get local host info
app.get('/notes', function(req, res) {
   
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

app.get("/api/notes" , (req, res) => {
    
    console.log(req.body);

    const newNote = req.body;

    fs.readFile( path.join (__dirname , 'db/db.json'), 'utr8' , (err, data) => {

        const notes = JSON.parse(data);

        const notesJSON = JSON.stringify(notes);
    })
    res.send("API NOTES");
})
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });


app.get("*" , (req, res) => {
    res.send("CATCH ALL");
});

// Starts the server to begin listening

app.listen(PORT, function() {
    console.log(`App listening on PORT http://localhost:${PORT}`);
})