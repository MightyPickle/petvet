const { Router } = require('express');
const docController = require('../controllers/doc.controller');

const doctorRouter = Router();

doctorRouter.post('/', docController.editDocInfo);

module.exports = { doctorRouter };
