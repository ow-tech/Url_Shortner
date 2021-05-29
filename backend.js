const express = require('express');

const mongoose = require('mongoose');

const app = express();

// connecting to locohost mongodb database
mongoose.connect('mongodb://localhost',{
    useNewUrlParser:true, useUnifiedTopology: true
})
// setting up app to use ejs template engine
// app.set('view engine', 'ejs')
app.set('view engine', 'ejs')
// route for index.js file(),{}
app.get('/',(req, res)=>{
    res.render('index')
})

// post endpoint
app.post('/shortUrls', (req, res) =>{

})
app.listen(process.env.PORT ||1337 );

