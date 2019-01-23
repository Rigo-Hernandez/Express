var express = require('express');
var router = express.Router();


router.get('/model3', (req, res)=>{
    var data = req.app.get("appData");
    var tesla = data.tesla;
    var models= data.tesla[1]
    

    res.render('models', {
        pageTitle: 'Tesla',
        tesla: data.tesla,
        models: data.tesla[1],
        // model: teslaArray,
        // tesla: teslaModels,
        pageID: 'model3',
        
        
    });
    // console.log(models)
});

module.exports = router;
