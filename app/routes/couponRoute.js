const router = require('express').Router();
const couponController=require('../controller/couponController');

router.route('/')
.get(couponController.show)
.post(couponController.collect);

router.route('/:id').delete(couponController.remove);

module.exports = router;