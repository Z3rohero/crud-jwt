import {Router} from 'express';
import {login, register,logout,profile} from '../controllers/auth.controller.js';
import {authRequired} from '../middleware/validarToken.js';
export const router = Router();    

router.post('/registra', register);
router.post('/login',login);
router.post('/logout',logout);
router.get('/profile',authRequired,profile);






