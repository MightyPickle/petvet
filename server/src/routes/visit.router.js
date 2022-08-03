const { Router } = require('express');
const visitController = require('../controllers/visit.controller');
// const checkAuth = require('../middlewares/checkAuth');

const visitRouter = Router();

visitRouter.route('/')
  .post(visitController.addVisit);

module.exports = visitRouter;
