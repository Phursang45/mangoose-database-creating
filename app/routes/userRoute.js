const router = require('express').Router();
const userController=require('../controller/userController');

router.route('/')
.get(userController.list)
.post(userController.store);

router.route('/:id').delete(userController.destroy);

module.exports = router;