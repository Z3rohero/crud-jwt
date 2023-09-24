import mongoose from "mongoose";

const TareaSchema = new mongoose.Schema({
    title: {
        type: String,
      
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
  
}
)

export default mongoose.model("Tarea", TareaSchema);