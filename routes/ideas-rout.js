const express = require("express");
const { listIdeas, updateIdeas } = require("../controllers/ideasControllers");

const  router = express.Router();

router.get("/", listIdeas);

router.put("/:id",updateIdeas)


module.exports = router;

