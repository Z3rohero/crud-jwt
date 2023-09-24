import { Router } from "express";
import { authRequired } from "../middleware/validarToken.js";
import {
getTarea,
getTareasAll,
DeleteTarea,
CreateTarea,
UpdateTarea
} from "../controllers/tarea.controller.js";
const router  = Router();


router.get('/tarea',authRequired,getTareasAll);
router.get('/tarea/:id',authRequired,getTarea);
router.post('/tarea',authRequired,CreateTarea);
router.delete('/tarea/:id',authRequired,DeleteTarea);
router.put('/tarea/:id',authRequired,UpdateTarea);



export default router;
