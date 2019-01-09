var express = require('express');
var router = express.Router();
var app = express();
// var data = require('../data/data.json');

app.use(express.static('public'));


router.get('/', (req, res)=>{

    // var teslaModels = data.tesla;
    // var teslaArray = [];
    
    // teslaModels.forEach(function(item) {
    //     teslaArray = teslaArray.concat(item.images);
    // });

    res.render('index', {
        pageTitle: 'Tesla',
        // model: teslaArray,
        // tesla: teslaModels,
        pageID: 'home',
        teslalogo: '/images/tesla-logo.png'
    });
});

module.exports = router;

