const router = require('express').Router();
const bannerController=require('../controller/bannerController');

router.route('/')
.get(bannerController.show)
.post(bannerController.collect);

module.exports = router;