const { Router } = require('express');
const authController = require('../controllers/auth.controller');

const authRouter = Router();

authRouter.post('/signup', authController.signUp);
authRouter.post('/signin', authController.signIn);
authRouter.get('/signout', authController.signOut);

module.exports = authRouter;
