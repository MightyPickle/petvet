const express = require('express');
const doctorController = require('../controllers/doctors.controller');

const router = express.Router();

router.get('/:id/schedule', doctorController.getDocSchedule);

module.exports = router;
