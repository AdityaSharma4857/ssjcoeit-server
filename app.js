const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`Hello Aditya, from SSJCOE's server`);
});

app.get('/about', (req, res) => {
    res.send(`Hello Aditya, from SSJCOE's about server`);
});

app.get('/contact', (req, res) => {
    res.send(`Hello Aditya, from SSJCOE's contact server`);
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
