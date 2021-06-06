const express = require('express');

const mongoose = require('mongoose');

const env = require('dotenv').config();

const shortUrl =require('./models/shortUrl');

const app = express();
app.set('view engine', 'ejs')




app.use(express.urlencoded({ extended: true}))



// let port = process.env.PORT

mongoose.connect(dbUri,{
    useNewUrlParser:true, useUnifiedTopology: true
}).then((res)=> app.listen(5000 || process.env))
.catch((err)=>console.log(err));

// setting up app to use ejs template engine
// mongoose.connect('mongodb://localhost/urldb',{
//     useNewUrlParser:true, useUnifiedTopology: true
// })


// route for index.js file,retrieving{}
app.get('/', async (req, res)=>{
    try {
        const shortUrls = await shortUrl.find()
        res.render('index', {shortUrls:shortUrls})
        }
    catch (err){
        console.log(err.message)
    }    
     
    
    
    
})

// post endpoint
app.post('/shortUrls', async (req, res) =>{
    try {
        await shortUrl.create({long: req.body.longUrl})
        // .catch((err)=> console.log(err))
        // implementation of custom urls
    res.redirect('/') }
    catch (err){
        console.log(err.message)
    }
   
})


app.get('/:clickdurl', async (req, res)=>{
    try {
        const url = await shortUrl.findOne({short:req.params.clickdurl})
       if(url == null) return res.sendStatus(404)
    url.clicks++
    url.save()

    res.redirect(url.long) 
    }
    catch (err){{}}
   
})

// app.listen(process.env.PORT ||1337)


