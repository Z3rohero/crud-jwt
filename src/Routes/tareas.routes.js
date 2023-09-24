import { Router } from "express";
import { authRequired } from "../middleware/validarToken.js";
import {
getTarea,
getTareasAll,
DeleteTarea,
CreateTarea,
UpdateTarea
} from "../controllers/tarea.controller.js";

import { validateSchema } from "../middleware/ValidarMiddleware.js";
import {
    tareaSchema,
    tareaUpdateSchema
} from "../schemas/tarea.schema.js";


const router  = Router();


router.get('/tarea',authRequired,getTareasAll);
router.get('/tarea/:id',authRequired,getTarea);
router.post('/tarea',authRequired,validateSchema(tareaSchema),CreateTarea);
router.delete('/tarea/:id',authRequired,DeleteTarea);
router.put('/tarea/:id',authRequired,validateSchema(tareaUpdateSchema),UpdateTarea);



export default router;
