const express = require('express');

// create express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname })
    res.render('index');
})

app.use( (req, res) => {
    //res.status(404).sendFile('.views/404.html', {root: __dirname})
})