const express = require('express');

const router = express.Router();

var data = require(`../data/data.json`)


router.get('/modelSemi', (req, res)=>{
    var html = ""
    var tesla= data.tesla[5]

    modelSemi=`
    <li>
    <h2>${tesla.model}</h2>
    <img src='/images/${tesla.images}'>
    <p> ${tesla.description} </p>
    <p> Manufacturer : ${tesla.manufacturer}</p>
    <p> MSRP : ${tesla.MSRP}</p>
    <p> Range : ${tesla.range}</p>
    <p> Horsepower : ${tesla.Horsepower}</p>
    <a href="/">Go Back </a>
    </li>`
    
    


    res.send (`<ul>${modelSemi}</ul>`)
});

module.exports = router