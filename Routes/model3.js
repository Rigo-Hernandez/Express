const express = require('express');

const router = express.Router();

var data = require(`../data/data.json`)


router.get('/model3', (req, res)=>{
    var html = ""
    var tesla= data.tesla[1]

    model3=`
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
    
    


    res.send (`<ul>${model3}</ul>`)
});

module.exports = router