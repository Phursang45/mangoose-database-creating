const router = require('express').Router();
const categoryController=require('../controller/categoryController');

router.route('/')
.get(categoryController.show)
.post(categoryController.collect);

router.route('/:id').delete(categoryController.remove);

module.exports = router;