const mongoose = require('mongoose');

const url = 'mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/DB26JULY?retryWrites=true&w=majority';

// asynchronous function - returns a promise
mongoose.connect(url)
.then((result) => {
    // console.log(result);
    console.log('connected to mongodb');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;