const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    firstName:{
        type:String,
        required:true
     
    },
    lastName:{
        type:String,
        required:true
        
    },
    phoneNumber:{
        type:String,
        required:true,
        maxlength:10
    }
})


const Task = mongoose.model("Task",taskSchema)

module.exports = Task