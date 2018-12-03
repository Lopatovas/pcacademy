const express  = require('express');
const playerController = require('../controllers/player');

const router = express.Router();

router.post('/', playerController.create);
router.get('/', playerController.get);
router.get('/:id', playerController.getById);
router.put('/:id', playerController.updateById);
router.delete('/:id', playerController.delete);

module.exports = router;