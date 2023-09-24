import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trime: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        trime: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 3
    }
  
},  {
    timestamps: true
}
)


export default mongoose.model("User", userSchema);