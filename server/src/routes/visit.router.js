const { Router } = require('express');
const visitController = require('../controllers/visit.controller');
// const checkAuth = require('../middlewares/checkAuth');

const petRouter = Router();

petRouter.route('/')
  .post(visitController.addVisit);

module.exports = petRouter;
