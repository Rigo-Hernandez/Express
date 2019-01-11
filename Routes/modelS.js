var express = require('express');
var router = express.Router();


router.get('/modelS', (req, res)=>{
    var data = req.app.get("appData");
    var tesla = data.tesla;
    var models= data.tesla;
    

    res.render('models', {
        pageTitle: 'Tesla',
        tesla: data.tesla,
        models: data.tesla[0],
        // model: teslaArray,
        // tesla: teslaModels,
        pageID: 'modelS',
        
        
    });
    console.log(models)
});

module.exports = router;
