const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const personas = require("./routes/personas");
require("dotenv").config();

const port = 3000;
const app = express();
app.use(cors());
//app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//establecer la conexion con la BD-Mongo
mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    function(error, database) {
        if (error) {
            console.log(error);
            process.exit(1);
        } else {
            let db = database;
            console.log("Conectados a MONGODB2");
        }
    }
)




app.use("/api", personas);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});