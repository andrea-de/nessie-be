const router = require('express').Router();
const polygonController = require("../controllers/polygon.js");

module.exports = router;

router.get('/all', polygonController.readAll);
router.post('/create', polygonController.create); 
router.post('/read', polygonController.read);
router.put('/update', polygonController.update);
router.put('/coordinate', polygonController.updateCoordinates);
router.put('/status', polygonController.updateStatus);