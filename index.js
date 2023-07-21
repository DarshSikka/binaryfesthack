const express = require("express");
const title = "tasksync"
const ejs = require("express-ejs-layouts")
require("dotenv").config();
const { env } = require("process");
const PORT = env.PORT || 5555
const app = express();
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const signup = require("./routes/auth/signup")
app.use("/", signup);
app.use("/features", (_, res)=>{
    res.render("features")
})
app.use(ejs);
app.use(express.static('public')) 
app.get("/", (req, res)=>{
    return res.render("home", {hello: `Welcome to ${title}`})
})
app.listen(PORT, console.log(`app listening on port ${PORT}`))
