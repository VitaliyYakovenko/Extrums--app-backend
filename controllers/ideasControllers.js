const Idea = require("../model/idea");
const HttpError = require("../halpers/HttpError");
const { ideaStatusSchema ,ideaDoneSchema} = require("../utils/index");



const listIdeas = async (req, res, next) => {
    console.log(req.query);
  
    try {
        const { page = 1, limit = 5 } = req.query;
        const skip = (page - 1) * limit; 
        
        const data = await Idea.find({}, "", { skip, limit });
        const { length: total } = await Idea.find(); 

        if (!data) {
            throw HttpError(500, "Server error");
        };

        res.json({data, total});
    } catch (error) {
        next(error);
    }
};





const updateStatusById = async (req, res, next) => {
    console.log("updateStatusById");

    try {
       const {error} = ideaStatusSchema.validate(req.body);
      if (error) {
             throw HttpError(400, error.message);
       }
       const { id } = req.params; 
       const result = await Idea.findByIdAndUpdate(id, req.body, { new: true });
       
        if (!result) {
             throw HttpError(404, `Idea with ${id} not found`);
          }
         res.json(result)

     } catch (error) {
          next(error);
    }
};


const doneIdeaById = async (req, res, next) => { 
    console.log("doneIdeaById")
    try { 
        const {error} = ideaDoneSchema.validate(req.body);
        if (error) {
            throw HttpError(400, error.message);
        }
        const { id } = req.params;
    
        const result = await Idea.findByIdAndUpdate(id, req.body, {new: true});
 
        if (!result) {
            throw HttpError(404, `Idea with ${id} not found`);
         }
        res.json(result)

    }
    catch (error) {
        next(error);
    }
};


module.exports = {
    listIdeas,
    updateStatusById,
    doneIdeaById,
};