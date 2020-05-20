const http = require('http');

const express = require('express'); 

const app = express(); 

app.use('/users', (req, res, next) => {
    console.log('users middleware')
    res.send('this is the users page')
}); 

app.use('/', (req, res, next) => {
    console.log('home middleware')
    res.send('this is the home page')
})

app.listen(3000); 