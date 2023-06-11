const express = require("express");
const { listIdeas, doneIdeaById, updateStatusById } = require("../controllers/ideasControllers");
const { isValidId } = require("../utils/index");

const  router = express.Router();

router.get("/", listIdeas);

router.patch("/:id/status",isValidId, updateStatusById);

router.patch("/:id/done", isValidId, doneIdeaById);

module.exports = router;

