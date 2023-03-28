const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {type: String, require:true},
    tel:{type: String, require:true},
    date:{type:Date,default: Date.now},
    email:{type:String,require:true},
    tur:{type:String,require:true},
    profil_image: {type: String, require:true}


})
module.exports = mongoose.model('Profil', PostSchema)