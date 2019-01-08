const express = require('express');

const router = express.Router();

var data = require(`../data/data.json`)


router.get('/', (req, res)=>{

    var teslaData = data.tesla
        var html = ""
    
    teslaData.forEach((item)=>{
        
        
        
        html += 
        `
        <head>
        <title>Tesla</title>
        <link rel="stylesheet" type="css" href="../public/css/styles.css">
        </head>
        <li>
            <h2>${item.model}</h2>
            <img src='/images/${item.images}'>
            <p> ${item.description} </p>
            <p> Manufacturer : ${item.manufacturer}</p>
            <p> MSRP : ${item.MSRP}</p>
            <p> Range : ${item.range}</p>
            <p> Horsepower : ${item.Horsepower}</p>
            <a href="${item.model.replace(/\s/g,'')}">More Info .. </a>
        </li>




        `
    })

    res.send (`<ul>${html}</ul>`)
})

module.exports = router