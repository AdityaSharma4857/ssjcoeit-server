const dotenv = require("dotenv");
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});
require('./db/connection');


const PORT = process.env.PORT;


// Middleware

const middleware = (req, res, next) => {
    console.log(`Hello from middleware`);
    next();
}


// Routing

app.get('/', (req, res) => {
    res.send(`Hello Aditya, from SSJCOE's server`);
});

app.get('/about', (req, res) => {
    res.send(`Hello Aditya, from SSJCOE's about server`);
});

app.get('/students', (req, res) => {
    res.send(`Hello Aditya, from SSJCOE's students server`);
});

app.get('/faculty', (req, res) => {
    res.send(`Hello Aditya, from SSJCOE's faculty server`);
});

app.get('/gallery', (req, res) => {
    res.send(`Hello Aditya, from SSJCOE's gallery server`);
});

app.get('/alumni', (req, res) => {
    res.send(`Hello Aditya, from SSJCOE's alumni server`);
});

app.get('/notices', (req, res) => {
    res.send(`Hello Aditya, from SSJCOE's notices server`);
});

app.get('/login', (req, res) => {
    res.send(`Hello Aditya, from SSJCOE's login server`);
});

app.get('/attendance', middleware, (req, res) => {
    console.log(`Hello from attendance page`)
    res.send(`Hello Aditya, from SSJCOE's attendance server`);
});



// Listening to port

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
