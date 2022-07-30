const { Router } = require('express');
const petsController = require('../controllers/pets.controller');

const userRouter = Router();

userRouter.get('/patients/pets', petsController.getAllPets);

module.exports = userRouter;
