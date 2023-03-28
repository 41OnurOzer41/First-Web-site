const path = require('path')
const express = require('express')
const {engine}  = require('express-handlebars');
const exphbs = {engine}
const mongoose = require('mongoose')
const moment = require('moment')  
const expressSession = require('express-session')
const connectMongo = require('connect-mongo');
const bodyParser = require('body-parser') 
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const fileUpload = require('express-fileupload')

//const generateDate = require('./helpers/generateDate').generateDate

mongoose.connect('mongodb://127.0.0.1/nodeblog_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const mongoStore= connectMongo(expressSession)
app.use(expressSession({
    secret:"test",
    resave:false,
    saveUninitialized:true,
    store: new mongoStore({mongooseConnection : mongoose.connection})              //mongoStore.create({ mongoUrl: 'mongodb://localhost/test-app' })
}))



app.use(fileUpload())


/*  const hbs = exphbs.create({
    helpers:{
    generateDate : (date,format)=>{
        return moment(date).format(format)
}

    }

})  */




app.use(express.static('public'))

app.engine('handlebars', engine({
    extname:'handlebars',
    defaultLayout:"main",
    helpers:{

        dateStyle: (date, format) =>{
          return moment(date).format(format)
        }
        
      }
}));

app.set('view engine','handlebars');



 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json()) 

app.use((req,res,next)=>{

    if(req.session.admin){
    
      res.locals ={
        admintrue: true,
        admin:req.session.admin,
      }
    }else{
    
      res.locals ={
        admintrue : false,
        admin:''
      }
    }
    next()
  })

const main = require('./routes/main')
const posts = require('./routes/posts');

app.use('/',main)
app.use('/post',posts)

app.listen(port,hostname, () => {
    console.log(`Server Çalışıyor, http://${hostname}:${port}/`)
})








