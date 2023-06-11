const  Joi = require("joi");


const  ideaUdpateSchema = Joi.object({
    action: Joi.string().required(),
    theme: Joi.string().allow(null).required(),
    status: Joi.string().required(),
    date: Joi.string().allow(null).required(),
    done: Joi.boolean().required(),
});


module.exports = ideaUdpateSchema;