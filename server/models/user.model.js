const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    phoneNumber: {type: String, require: true, unique: true},
    password: { 
        type: String,
        set(val) {
            return require('bcrypt').hashSync(val, 10)
        } 
    },
},{
    collection:'users'
})


module.exports = mongoose.model('Users',UserSchema);