var express = require('express');
var router = express.Router();

var roomgames = require('../controllers/room-games')


router.get('/list', roomgames.list)

router.post('/new',roomgames.newgameinputcheck, roomgames.newgame)

router.delete('/del', roomgames.delgame)

router.put('/update', roomgames.updategame)

module.exports = router;
