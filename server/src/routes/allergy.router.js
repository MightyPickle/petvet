const { Router } = require('express');
const allergyController = require('../controllers/allergy.controller');
// const checkAuth = require('../middlewares/checkAuth');

const allergyRouter = Router();

allergyRouter.route('/')
  .post(allergyController.addAllergy);

module.exports = allergyRouter;
