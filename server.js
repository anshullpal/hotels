const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req body


app.get('/', function (req,res){
    res.send("Welcome to my hotel..")
})

// Import the Router File
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
// Use the Router
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})