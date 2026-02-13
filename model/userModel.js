const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName:{
        type:string,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isadmin:{
        type:Boolean,
        require:false
    },
    
})
model.exports = mongoose.model("User",userSchema);