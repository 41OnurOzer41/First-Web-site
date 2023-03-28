const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const Profil = require('../models/Profil')
const Kandirapost = require('../models/Kandirapost')
const Admin = require('../models/Admin')
const path = require('path')


router.get('/new', (reg, res) => {

    if(reg.session.admin)
    res.render('site/addpost')
    else
    res.redirect('/login')
})
router.post('/test', (reg, res) => {


    Post.create({
        title: reg.body.title,
        content: reg.body.content,
        date: reg.body.date,
        tur: reg.body.tur,
    })
    res.redirect('/')
})

router.post('/test2', (reg, res) => {
    //console.log('gelen dosya',reg.files)
    //console.log('gelen'+ reg.url)
    // console.log('gelenbody'+ reg.body)
    //console.log('title'+reg.body.title)
    //console.log('title'+reg.body.tel)
    //console.log('title'+reg.body.tur)


    let profil_image = reg.files.profil_image

    profil_image.mv(path.resolve(__dirname, '../public/assets/img/profilimages', profil_image.name))

    Profil.create({
        ...reg.body,
        profil_image: `assets/img/profilimages/${profil_image.name}`

    })
    res.redirect('/')
})
router.post('/test3', (reg, res) => {

    let kandirapost_image = reg.files.kandirapost_image

    kandirapost_image.mv(path.resolve(__dirname, '../public/assets/img/kandiraimages', kandirapost_image.name))


    Kandirapost.create({
        title: reg.body.title,
        content: reg.body.content,
        ...reg.body,
        kandirapost_image: `assets/img/kandiraimages/${kandirapost_image.name}`

    })
    res.redirect('/')
})
router.post('/test4', (reg, res) => {


    Admin.create({
        title: reg.body.title,
        content: reg.body.content,
        email: reg.body.email


    })
    res.redirect('/login')
})

router.post('/test5', (req, res) => {
    Admin.find({
        email: req.body.email,
        content: req.body.content,
    }).lean().then(user => {
        if (user.length > 0) {
            console.log("Giriş başarılı", user)
            req.session.admin = user[0]
            res.redirect('../');
        } else {
            global.msg = 'Kullanici adi veya şifre yanlış!';
            res.redirect('/login');
        }
    })
})




module.exports = router