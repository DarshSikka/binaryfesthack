const express = require("express");
const { UUIDV4 } = require("sequelize");
const Todolist = require("../../models/Todo.js")
const router = express.Router();
router.post("/addtodo", (req, res)=>{
    const body = req.body;
    const {todoname, todopassword} = body;
    const id = UUIDV4();
    const list = new Todolist({
        todoname, todopassword, todoid: id, contents: JSON.stringify([])
    });
    list.save();
    res.send(id);
})
router.get("/addtodo", (req, res)=>{
    res.render("signup", {});
})
module.exports = router;