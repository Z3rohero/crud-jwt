import User from "../models/user.model.js";
import bcrypt from "bcryptjs";    
import { CreateToken } from "../libs/jwt.js";


export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Hash the user's password
        const passwordHash = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        const token = await CreateToken({ id: savedUser._id });
        res.cookie("token", token)
        res.json({
            id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email
        });


    } catch (error) {
        res.status(500).json({ error: "Internal server error" + error });
    }
}


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const EncontradUsuario = await User.findOne({ email })

        if (!EncontradUsuario) {
            return res.status(400).json({ error: "El usuario no existe" });
        }
        // Hash the user's password
        const Concide = await bcrypt.compare(password, EncontradUsuario.password)
        
        if (!Concide) {
            return res.status(400).json({ error: "El password no es correcto" });
        }

        const token = await CreateToken({ id: EncontradUsuario._id });
        res.cookie("token", token)
        res.json({
            "massage": "Login exitoso"
        });


    } catch (error) {
        res.status(500).json({ error: "Internal server error" + error });
    }
}


