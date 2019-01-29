const express  = require('express');
const postController = require('../controllers/post');

const router = express.Router();

router.post('/', postController.create);
router.get('/', postController.get);
router.get('/:id', postController.getById);
router.put('/:id', postController.updateById);
router.delete('/:id', postController.delete);

module.exports = router;