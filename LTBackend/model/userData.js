const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    userId:String,
    name : {
        type: String,
        required : true
    }, email :{
        type: String,
        required : true,
        
    },
    username: {  
        type: String,  
        required: true,
    },
    password: {
        type: String, 
        required: true,
    },
    role :{
        type: String,
        
    }
})  

const userData = mongoose.model('userdb', userSchema)
module.exports = userData;