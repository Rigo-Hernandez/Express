var express = require('express');
var router = express.Router();


router.get('/modelRoadster', (req, res)=>{
    var data = req.app.get("appData");
    var tesla = data.tesla;
    var models= data.tesla[4]
    

    res.render('models', {
        pageTitle: 'Tesla',
        tesla: data.tesla,
        models: data.tesla[4],
        // model: teslaArray,
        // tesla: teslaModels,
        pageID: 'modelRoadster',
        
        
    });
    console.log(models)
});

module.exports = router;
