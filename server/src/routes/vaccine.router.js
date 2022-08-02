const { Router } = require('express');
const vaccineController = require('../controllers/vaccine.controller');
// const checkAuth = require('../middlewares/checkAuth');

const vaccineRouter = Router();

vaccineRouter.route('/')
  .post(vaccineController.addVaccine);

module.exports = vaccineRouter;
