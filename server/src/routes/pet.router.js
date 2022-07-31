const { Router } = require('express');
const petController = require('../controllers/pet.controller');

const petsRouter = Router();

petsRouter.route('/')
  .post(petController.addNewPet);

// petsRouter.route('/:id')
//   .get(petController.getPet);

module.exports = petsRouter;
