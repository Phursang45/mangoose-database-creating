const router = require('express').Router();
const bookController=require('../controller/bookController');

router.route('/')
.get(bookController.show)
.post(bookController.collect);

router.route('/:id').delete(bookController.remove);

module.exports = router;