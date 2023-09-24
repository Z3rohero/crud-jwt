import  {z} from 'zod';

export const  tareaSchema =z.object({
title: z.string({
    required_error: "Titulo requerido"
}),
description: z.string({
    required_error:"Descripcion requerida"
}).optional(),
date: z.string().optional()


})


export const  tareaUpdateSchema =z.object({
    title: z.string({
        required_error: "Titulo requerido"
    }).optional(),
    description: z.string({
        required_error:"Descripcion requerida"
    }).optional(),
    date: z.string().optional()
    
    
    })
    