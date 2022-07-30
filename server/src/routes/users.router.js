const { Router } = require('express');
const patientController = require('../controllers/patient.controller');

const userRouter = Router();

userRouter.get('patients/:id', patientController);
userRouter.get('doctors/:id', patientController.getPatient);

module.exports = userRouter;
