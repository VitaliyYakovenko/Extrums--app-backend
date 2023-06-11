const ideas = require("../db/newDB.json");
const utils = require("../utils/index");
const { HttpError, ideaUdpateSchema } = utils;




const listIdeas = async (req, res, next) => {
    try {
        const result = await ideas;
        if (!result) {
            throw HttpError(500, "Server error")
        };

        res.json(result);
    } catch (error) {
        next(error);
    }
};

const updateIdeas = async (req, res, next) => {
    try { 
        const {error} = ideaUdpateSchema.validate(req.body);
        if (error) {
            throw HttpError(400, error.message);
        }
        const { id } = req.params;
        // const result = await fn для обновления
        // if (!result) {
            // throw HttpError(404, `Idea with ${id} not found`);
        //  }
        // res.json(result)

    }
    catch (error) {
        next(error);
    }
};




module.exports = {
    listIdeas,
    updateIdeas,
};