const Task = require('../model/task')

module.exports.Create = (req,res)=>{
    const body = req.body
    const task = new Task(body)
    task.save()
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports.List = (req,res)=>{
    Task.find()
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports.Edit = (req,res)=>{
    const body = req.body
    const id = req.params.id
    Task.findByIdAndUpdate(id,body)
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports.Delete= (req,res)=>{
    const id = req.params.id
    Task.findByIdAndDelete(id)
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}