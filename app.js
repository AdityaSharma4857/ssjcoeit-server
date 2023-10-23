const express = require('express');
const app = express();

// Middleware

const middleware = (req, res, next) => {
    console.log(`Hello from middleware`);
    next();
}




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

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
