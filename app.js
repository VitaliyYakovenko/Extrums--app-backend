const express = require("express");
const cors = require("cors");
const loger = require("morgan");
const ideasRouter = require("./routes/ideas-rout");

const app = express();
const formastsLogger = app.get("env") === "development" ? "dev" : "short";


app.use(loger(formastsLogger));
app.use(cors());
app.use(express.json());


app.use("/api/ideas", ideasRouter);


app.use((_, res) => {
    res.status(404).json({
        message: "Not Found"
    });
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Sevrver error" } = err;
    res.status(status).json({message});
});

module.exports = app;

