const express = require('express');
const doctorController = require('../controllers/doctors.controller');

const router = express.Router();

router.get('/:id/schedule', doctorController.getDocSchedule);
router.post('/', doctorController.editDocInfo);

module.exports = router;
