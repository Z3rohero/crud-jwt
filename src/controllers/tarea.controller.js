import Tarea from '../models/tarea.model.js';

export const getTareasAll = async (req, res) => {
    const tareas = await Tarea.find({
        user:req.user.id
    }).populate("user");

    res.json(tareas);

};
export const getTarea = async (req, res) => {

const  tareaid = await  Tarea.findById(req.params.id);
if (!tareaid) {
    return res.status(404).json({error:"No se encontro la tarea"});
}
res.json(tareaid);

};
export const DeleteTarea = async (req, res) => {
    const  tareaid = await  Tarea.findByIdAndDelete(req.params.id);
if (!tareaid) {
    return res.status(404).json({error:"No se encontro la tarea"});
}
return res.status(200).json({message:"Tarea eliminada"});
};
export const CreateTarea = async (req, res) => {
    const { title, description, date } = req.body;

    const tareaSave =await  new Tarea({
        title,
        description,
        date,
        user:req.user.id
    }).save();

    res.json(tareaSave);

};
export const UpdateTarea = async (req, res) => {
    
    const TareaActualizada = await Tarea.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    });

    if (!TareaActualizada) {
        return res.status(404).json({error:"No se encontro la tarea"});
    }   

    res.json(TareaActualizada);



};