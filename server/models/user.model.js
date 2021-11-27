const mongoose = require('mongoose')

const User = new mongoose.Schema({
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

const model = mongoose.model('Users',User);

module.exports = model