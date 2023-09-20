const Todomodel = require('../models/Todomodel')

module.exports.getTodo = async (req, res) => {
    const Todo = await Todomodel.find()
    res.send(Todo)
}

module.exports.saveTodo = async (req, res) => {

    const{ text } = req.body
    Todomodel
    .create({text})
    .then((data) => {
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
}

module.exports.updateTodo = async (req, res) =>{
    const {_id, text} =req.body
    Todomodel
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.send("Updated Succesfully..."))
    .catch((err) => console.log(err))
}

module.exports.deleteTodo = async (req, res) =>{
    const {_id, text} =req.body
    Todomodel
    .findByIdAndDelete(_id, {text})
    .then(()=> res.send("Deleted Succesfully..."))
    .catch((err) => console.log(err))
}

