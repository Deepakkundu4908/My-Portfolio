const express = require('express');
const path = require('path');
const PORT = 3000;
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/home', (req, res) => {
    let data = fs.readFileSync('home.html', 'utf-8');
    res.send(data);
});

app.get('/about', (req, res) => {
    let data = fs.readFileSync('about.html', 'utf-8');
    res.send(data);
});

app.get('/project', (req, res) => {
    let data = fs.readFileSync('project.html', 'utf-8');
    res.send(data);
}); 

app.get('/contact', (req, res) => {
    let data = fs.readFileSync('contact.html', 'utf-8');
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/home`);
});  
