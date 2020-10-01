const express = require('express');
const {response} = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

const home = (req, res) => {
    res.render('home');
}

const about = (req, res) => {
    console.log(req);
    res.render('about');
}

app.get('/', home);
app.get('/home', home);
app.get('/about', about);

app.listen(PORT, () => {
    console.log('Express Server listening on port ' + PORT);
})