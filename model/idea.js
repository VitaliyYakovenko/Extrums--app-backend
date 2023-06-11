const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils/index");

const ideaSchema = new Schema({
    action: {
        type: String,
        require: true,
    },
    theme: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    date: {
        type: Schema.Types.Mixed,
        require: true,
    },
    done: {
        type: Boolean,
        require: true,
    },
});


ideaSchema.post("save", handleMongooseError);

const Idea = model("idea", ideaSchema);

module.exports = Idea;
