import {Router} from 'express';
import {login, register,logout,profile} from '../controllers/auth.controller.js';
import {authRequired} from '../middleware/validarToken.js';
import {validateSchema} from  '../middleware/ValidarMiddleware.js';
import {
    registerSchema,
    loginSchema
}
from '../schemas/auth.schema.js'
export const router = Router();    


router.post('/registra',validateSchema(registerSchema), register);
router.post('/login',validateSchema(loginSchema),login);
router.post('/logout',logout);
router.get('/profile',authRequired,profile);






