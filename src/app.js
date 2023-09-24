import express from "express";
import morgan from "morgan";
import { router } from "./Routes/auth.routes.js";
const app = express();


app.use(morgan('dev'));
//asi vendra concatenado el api/ con el router
app.use(express.json());
app.use("/api",router);

export default app;