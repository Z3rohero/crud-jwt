 import  jwt from "jsonwebtoken";
 import {TOKEN_KEY} from "../config.js"
 // Generate a JWT token with a 1-day expiration
 
export const CreateToken = (payload) =>{
    return new Promise((resolve, reject) => {
        jwt.sign(payload, TOKEN_KEY, { expiresIn: '1d' }, (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    });

}

