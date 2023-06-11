const mongoose = require("mongoose");
const app = require("./app");

const PASSWORD = "U4z7p7e30pxBfFfc";
const DB_HOST = `mongodb+srv://Vitaliy:${PASSWORD}@cluster0.dbrqjaw.mongodb.net/my-ideas?retryWrites=true&w=majority`;

mongoose.connect(DB_HOST)
    .then(
        app.listen(4000, () => {
            console.log("server run")
        })
    )
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    })

