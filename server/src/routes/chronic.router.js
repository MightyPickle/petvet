const { Router } = require('express');
const chronicController = require('../controllers/chronic.controller');
// const checkAuth = require('../middlewares/checkAuth');

const chronicRouter = Router();

chronicRouter.route('/')
  .post(chronicController.addChronic);

module.exports = chronicRouter;
