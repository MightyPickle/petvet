const { Router } = require('express');
const imgController = require('../controllers/img.controller');
// const checkAuth = require('../middlewares/checkAuth');

const imgRouter = Router();

imgRouter.route('/user')
  .put(imgController.editUserImg);

imgRouter.route('/pet/:id')
  .put(imgController.editPetImg);

module.exports = imgRouter;
