import express from "express";
import morgan from "morgan";
import { router } from "./Routes/auth.routes.js";

import cookieParser from "cookie-parser";
import  rutatarea from "./Routes/tareas.routes.js";

const app = express();


app.use(morgan('dev'));
//asi vendra concatenado el api/ con el router
app.use(express.json());
app.use(cookieParser());

app.use("/api",router);
app.use("/api",rutatarea);

export default app;