const router = require('express').Router();
const mapboxController = require("../controllers/mapbox.js");

module.exports = router;

router.get('/token', mapboxController.fetchToken);
// other tokens