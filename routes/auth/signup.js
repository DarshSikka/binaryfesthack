const express = require("express");
const { v4 } = require("uuid");
const Todolist = require("../../models/Todo.js")
const router = express.Router();
router.post("/addtodo", (req, res)=>{
    const body = req.body;
    const {todoname, todopassword} = body;
    const id = v4();
    const list = new Todolist({
        todoname, todopassword, todoid: id, contents: JSON.stringify([])
    });
    list.save();
    res.render("signup", {})
})
router.get("/", (req, res)=>{
    res.render("signup", {});
})
router.post("/updatetodo", async (req, res)=>{
    const {todoname, todopassword, newtask, deadline, category} = req.body;
    console.log(req.body);
    const list = await Todolist.findOne({where: { todoname, todopassword}})
    if (!list){
        return res.send("bye hacker")
    }
    else{
        let contents = list.dataValues.contents;
        console.log(typeof contents);
        contents = JSON.parse(contents);
        console.log(contents);
        console.log(typeof contents);
        contents.push({task:newtask, deadline, category})
        console.log(contents);
        list.dataValues.contents = contents;
        await Todolist.update(list, {
            where:{
                todoid: list.todoid
            }
        })
        console.log(list.dataValues.contents);
        return res.render("sameastodo", list.dataValues)
    }
})
router.post("/gettodo", async (req, res)=>{
    const {todoname, todopassword} = req.body;
    const list = await Todolist.findOne({where: { todoname, todopassword}})
    if (!list){
        return res.send("bye bye hacker")
    }
    else{
        return res.render("yourtodo", list.dataValues)
    }
})
module.exports = router;