const  Joi = require("joi");


const  ideaStatusSchema = Joi.object({
    status: Joi.string().required(),
});



module.exports = ideaStatusSchema;
