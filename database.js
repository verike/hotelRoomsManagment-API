const mongoose = require('mongoose');
const constant = require('./constant');

mongoose.set('strictQuery', false);

// MongoDB Connection
function database() {
    mongoose.connect(constant.DataBase_URI, {
    
    })
    .then(() => {
        console.log("MongoDB is connected to your database")
    })
    .catch(() => {
        console.log("Connection failed, Try again.")
    })

}

// Export

module.exports = database;