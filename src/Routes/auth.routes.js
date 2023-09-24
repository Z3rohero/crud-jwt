import {Router} from 'express';
import {login, register} from '../controllers/auth.controller.js';

export const router = Router();    

router.post('/registra', register);
router.post('/login',login);




