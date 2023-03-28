const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {type: String, require:true},
    content: {type: String, required:true},
    kandirapost_image: {type: String, require:true}


})
module.exports = mongoose.model('Kandirapost', PostSchema)