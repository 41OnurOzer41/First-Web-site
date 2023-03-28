const mongoose = require('mongoose')

const Post = require('./models/Post')


mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})




/* Post.find({
    
},(error,post)=>{
    console.log(error,post)


}) */

/* Post.create({

    title: 'Benim ikinci post başlık',
    content:'Post ikinci içeriği lorem ipsum'
},(error,post) =>{
    console.log(error,post)
})
 */