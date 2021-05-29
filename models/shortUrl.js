const mongoose = require('mongoose');
const shortId = require('shortid');

// schema  for storing full url & shortcreated url
const shortUrlShcema = new mongoose.Schema({
    // column names full, short, clicks
    full: {
        type: String,
        required:true
    },
    short:{
        type: String,
        required: true 
        default: shortId.generate
    },
    clicks:{
        type:Number,
        default:0,
        required:true
    }

})


// exporting/hooking up model to the database 
module.exports= mongoose.model('shortUrl', shortUrlShcema)