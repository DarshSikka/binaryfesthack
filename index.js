const express = require("express");
const title = "Title will come here"
const ejs = require("express-ejs-layouts")
require("dotenv").config();
const { env } = require("process");
const PORT = env.PORT || 5555
const app = express();
app.set('view engine', 'ejs')
app.use(ejs);
app.use(express.static('public')) 
app.get("/", (req, res)=>{
    return res.render("home", {hello: title})
})
app.listen(PORT, console.log(`app listening on port ${PORT}`))
