const Joi = require("joi");


export const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    imageUrl: Joi.string()
        .min(3)
        .max(512)
        .required(),

    imageAlt: Joi.string()
        .min(3)
        .max(512)
        .required(), 
    
    description: Joi.string()
        .min(3)
        .max(256)
        .required(),
        
    color: Joi.array().items(Joi.string()).required().min(1),

    price: Joi.string()
        .min(1)
        .max(10)
        .required(),

})