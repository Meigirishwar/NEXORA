import {Router} from 'express';
import {register,login,me,changeCredentials,forgotPassword,resetPassword} from '../controllers/authController.js';
import {protect} from '../middleware/authMiddleware.js';
const r=Router();
r.post('/register',register);r.post('/login',login);r.post('/forgot-password',forgotPassword);r.post('/reset-password',resetPassword);r.get('/me',protect,me);r.put('/credentials',protect,changeCredentials);export default r;
