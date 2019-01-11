var express = require('express')
var router = express.Router()
const body_parser = require('body-parser');

router.get('/forms', (req,res)=>{
    res.render('forms')
})

router.use (body_parser.urlencoded({extended: false}));

router.post('/forms',(req,res)=>{
    var name = req.body.name;
    var email = req.body.email

    res.send(`${name} ${email}` )
})

module.exports = router