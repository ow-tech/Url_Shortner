const express = require('express');

const mongoose = require('mongoose');

const shortUrl =require('./models/shortUrl');

const app = express();
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true}))


// connecting to locohost mongodb database
const pass='CXtq9Jmm8Ffiw9S'
const dbUri="mongodb://urlshortneruser:CXtq9Jmm8Ffiw9S@alexapp-shard-00-00.tbfhc.mongodb.net:27017,alexapp-shard-00-01.tbfhc.mongodb.net:27017,alexapp-shard-00-02.tbfhc.mongodb.net:27017/urlshortner?ssl=true&replicaSet=atlas-5ye3nl-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(dbUri,{
    useNewUrlParser:true, useUnifiedTopology: true
}).then(app.listen(process.env.PORT ||1337))

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

// app.get('/:shortUrl', async (req, res)=> {
//     try{
//         const shortUrl = await shortUrl.findOne({ short:req.params.shortUrl})  
//         console.log(shorturl)
//     if(shortUrl == null) return res.sendStatus(404)

//     shortUrl.clicks++
//     shortUrl.save()

//     res.redirect(shortUrl.long)

//     }
//     catch (err){
//         console.log(err.message)
//     }

  
// })

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


