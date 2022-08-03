const { Router } = require('express');
const scheduleController = require('../controllers/schedule.controller');
// const checkAuth = require('../middlewares/checkAuth');

const scheduleRouter = Router();

scheduleRouter.route('/')
  .post(scheduleController.addScheduleEntry)
  .put(scheduleController.editSchedules);

module.exports = scheduleRouter;
