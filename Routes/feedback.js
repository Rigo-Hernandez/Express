var express = require('express');
var router = express.Router();

router.get('/feedback', function(req, res) {

    res.render('feedback', {
        pageTitle: 'Leave a message.',
        pageId: 'feedback'
    });
});

module.exports = router;




