var express = require('express');
var router = express.Router();
var gameControl = require('../controllers/gameController');

router.get('/friendFish', gameControl.getFishing);
router.post('/frend-fish',  gameControl.postFish);

//test
router.get('/friend/:link', gameControl.getFishPage);

module.exports =  router;