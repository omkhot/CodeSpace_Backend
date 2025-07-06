import express from 'express';
import {
    AuthUserController, 
    deleteUserAccountController, 
    logoutUser, 
    validateUser} from '../Controller/AuthController.js';
import passport from 'passport';

const AuthRouter = express.Router();

AuthRouter.get('/google', passport.authenticate('google', { 
    scope: ['profile', 'email']
})); 

AuthRouter.get('/google/callback',passport.authenticate('google', {
    session: false,
    failureRedirect: '/login'
}), AuthUserController);

AuthRouter.get('/validate', validateUser);
AuthRouter.post('/logout', logoutUser);

AuthRouter.delete('/:userId', deleteUserAccountController);

export default AuthRouter;