const router = require('express').Router();
const authorController=require('../controller/authorController');

router.route('/')
.get(authorController.show)
.post(authorController.collect);

router.route('/:id').delete(authorController.remove);

module.exports = router;