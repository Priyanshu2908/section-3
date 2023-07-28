const mongoose = require('mongoose');

const url ='mongodb+srv://PriyanshuChaubey29:Priyanshu2908@cluster0.mjm3gew.mongodb.net/luciferisinnocent?retryWrites=true&w=majority'

//Asynchronous Function- returns a promise
mongoose.connect(url)
.then((result) => {
    console.log('connected to mongodb');
}).catch((err) => {
    console.log(err);
});

console.log('do other stuff');