const express = require('express')
const router = express.Router()
const Post=require('../models/Post')
const Profil=require('../models/Profil')
const Kandirapost = require('../models/Kandirapost')




router .get('/',(reg,res)=>{
    
    Post.find({}).lean().then(posts=>{
    res.render('site/index',{posts:posts})

    })


  
})


router .get('/Kandira',(reg,res)=>{

    Kandirapost.find({}).lean().then(kandiraposts=>{
        
        res.render('site/Kandira',{kandiraposts:kandiraposts})
    
        })

    
})
router .get('/yonetim',(reg,res)=>{
    
    Profil.find({}).lean().then(profils=>{
        
        res.render('site/yonetim',{profils:profils})
    
        })
   
})
router .get('/burs',(reg,res)=>{
    res.render('site/burs')
})
router .get('/dilek',(reg,res)=>{
    res.render('site/dilek')
})
router .get('/icerik',(reg,res)=>{
    res.render('site/icerik')
})
router .get('/login',(req,res)=>{
    if(req.session.admin)
    res.redirect('/')
    else
    res.render('site/login',{mesaj:global.msg})
})
router .get('/Kayit',(reg,res)=>{
    res.render('site/Kayit')
})
router .get('/cikis',(req,res)=>{

    req.session.destroy(()=>{
        res.redirect('/');
       
    })

    
})

module.exports= router