const express = require('express');
const path = require('path');
const ejsMate = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/asia', (req, res) => {
    res.render('asia')
})

app.get('/europe', (req, res) => {
    res.render('europe')
})

app.get('/northamerica', (req, res) => {
    res.render('northamerica')
})

app.get('/africa', (req, res) => {
    res.render('africa')
})

app.get('/australia', (req, res) => {
    res.render('australia')
})

app.get('/southamerica', (req, res) => {
    res.render('southamerica')
})

app.get('/antarctica', (req, res) => {
    res.render('antarctica')
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})