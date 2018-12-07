const express  = require('express');
const teamController = require('../controllers/team');

const router = express.Router();

router.post('/', teamController.create);
router.get('/', teamController.get);
router.get('/:id', teamController.getById);
router.put('/:id', teamController.updateById);
router.delete('/:id', teamController.delete);

module.exports = router;