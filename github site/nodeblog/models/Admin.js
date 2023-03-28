const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {type: String, require:true},
    content:{type: String, require:true},
    email:{type:String,require:true}
    
    


})
module.exports = mongoose.model('Admin', PostSchema)