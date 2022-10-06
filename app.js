const express = require("express")
const app = express()
const router = require("./src/routes/api")
const bodyParser = require("body-parser")

// Security Middleware lib import 
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize")
const xssClean = require("xss-clean");
const cors = require("cors")
const hpp = require("hpp")



// Database Lib import 
const mongoose = require("mongoose")


// Security MiddleWare Use 
app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean());
app.use(cors());
app.use(hpp())

// body-parser implement 
app.use(bodyParser.json())


// request rate Limit 
const limit = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limit)
// DataBase Connection 
const DB_NAME = "TodoList"
const URI = `mongodb://localhost:27017/${DB_NAME}`;
const OPTION = { user: "", pass: "" };
mongoose.connect(URI, OPTION, (error) => {
    console.log(`DB Conection Success Full ! YOur DB Name ${DB_NAME} ! And DB URI ${URI}`)
    console.log(error)
})
// Router Location 
app.use("/api/v1", router)


// Undefined Router 
app.use("*", (req, res)=>{
    res.status(404).json({status:"Fail", data:"Sorry ! I Cannot Find Your Data "})
})
module.exports = app;