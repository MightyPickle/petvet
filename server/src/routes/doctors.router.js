const express = require('express');
const doctorController = require('../controllers/doctors.controller');
const docController = require('../controllers/doc.controller');

const router = express.Router();

router.get('/:id/schedule', doctorController.getDocSchedule);
router.post('/', docController.editDocInfo);

module.exports = router;
