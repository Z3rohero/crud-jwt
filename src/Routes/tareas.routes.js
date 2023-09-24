import { Router } from "express";
import { authRequired } from "../middleware/validarToken.js";

const router  = Router();


router.get('/tarea',authRequired,(req,res) => res.send("xd"));


export default router;
