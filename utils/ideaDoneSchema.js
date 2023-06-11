const  Joi = require("joi");



const ideaDoneSchema = Joi.object({
    done: Joi.boolean().required(),
    date: Joi.string().allow(null).required(),
});

module.exports = ideaDoneSchema;
