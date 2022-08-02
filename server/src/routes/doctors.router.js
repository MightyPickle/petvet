const express = require('express');
const doctorController = require('../controllers/doctors.controller');

const router = express.Router();

router.get('/', doctorController.getAllDocs);
router.post('/', doctorController.editDocInfo);
router.get('/profiles', doctorController.getAllDocsProfiles);
router.get('/categories', doctorController.getAllDocsCategories);
router.get('/name', doctorController.getDocByName);
router.get('/:id', doctorController.getOneDoctor);
router.get('/:id/schedule/', doctorController.getDocSchedule);

module.exports = router;
