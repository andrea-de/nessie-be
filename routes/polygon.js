const router = require('express').Router();
const polygonController = require("../controllers/polygon.js");

module.exports = router;

router.get('/all', polygonController.readAll);
router.post('/create', polygonController.create); 
router.post('/read', polygonController.read);
router.post('/coordinate', polygonController.updateCoordinates);
router.post('/status', polygonController.updateStatus);