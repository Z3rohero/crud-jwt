// para validar si existe el token en la cookie
import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../config.js";


export const  authRequired = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ error: "No estas autorizado" });
    }
    console.log("se valido el token");

    jwt.verify(token, TOKEN_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ error: "Token invalido" });
        }

       req.user = user;

    });
    next();
}