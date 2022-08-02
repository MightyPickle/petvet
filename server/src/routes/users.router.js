const { Router } = require('express');
const usersController = require('../controllers/users.controller');

const userRouter = Router();

// userRouter.get('/doctor')
userRouter.post('/signup', usersController.signUp);
userRouter.post('/signin', usersController.signIn);
userRouter.get('/signout', usersController.signOut);
userRouter.get('/', usersController.getUser);

module.exports = userRouter;
