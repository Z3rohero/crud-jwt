import mongoose from "mongoose";

export const conectarDB = async () => {
    try{
    await mongoose.connect("mongodb://localhost:27017/api");
    console.log("Conectado a la base de datos");

    }catch(error){
        console.log("No esta conectado la db" + error);
    }

}

