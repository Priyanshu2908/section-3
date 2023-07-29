// import express
const express = require('express');

// initiliaze express app
const app = express();
const port = 5000;

// import routers
const UserRouter = require('./routers/userRouter');
const ProductRouter = require('./routers/productRouter');

// middleware to convert json data to javascript object
app.use(express.json());

// middlewares
app.use('/user', UserRouter);
app.use('/product', ProductRouter);



// creating routes
app.get('/', (req, res) => {
    res.send('response from express server');
});

app.get('/home', (req, res) => {
    res.send('response from home')
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

// starting the server
app.listen(port,  () => {
    console.log('express server started successfully');
});