var express = request('express');
var router = express.Router();

var flickrService = require ('../services/flickrService');

router.get('photos',function(req,res){
    var photos = flickrService.recentPhotos; 
    res.json(photos);
});

module.exports = router;