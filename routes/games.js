var express = require('express');
var router = express.Router();

var roomgames = require('../controllers/room-games')


router.get('/games/list', roomgames.list)

router.post('/games/new', roomgames.newgame)

router.delete('/games/del', roomgames.delgame)

router.put('/games/update', roomgames.updategame)

module.exports = router;
