const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    company:{
        type:String
    },
    location:{
        type:String
    },
    hobbies:{
        type:[String],
        
    },
    school:{
            type:String,
        },
    birthDate:{
        type:Date
    },
})
 
module.exports = mongoose.model("profile",ProfileSchema);