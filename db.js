const mongoose = require('mongoose');
// Define the mongodb URL Connection
const mongoURL = 'mongodb://localhost:27017/person'  // Replace database with your database name

// Set up MongoDB Connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// GET the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
// Here db is a object which helps to perform all events like connected, disconnected.
const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected', ()=> {
    console.log('Connected to MongoDB Sever');
});

db.on('error', (err)=> {
    console.log('MongoDB connection error', err);
});

db.on('disconnected', ()=> {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;