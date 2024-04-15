const router = require('express').Router();

router.use('/user', require('./user'));
router.use('/polygon', require('./polygon'));
router.use('/mapbox', require('./mapbox.js'));

module.exports = router;