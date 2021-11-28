const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    description:{
        type:String
    },
    company:{
        type:String
    },
    location:{
        type:String
    },
    school:{
            type:String,
        },
    birthDate:{
        type:Date
    },
})
 
module.exports = mongoose.model("profile",ProfileSchema);