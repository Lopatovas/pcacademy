const express  = require('express');
const playerController = require('../controllers/player');

const router = express.Router();

router.post('/', playerController.create);
router.get('/', playerController.get);

module.exports = router;