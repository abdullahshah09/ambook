const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const app = express()
const SECRET = 'secret1'

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://minghui:minghui@cluster0.u1uih.mongodb.net/ambook?retryWrites=true&w=majority')

app.post('/api/register', async (req,res) => {

    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password,
        })
        return res.status(200).send({
            msg: 'Register successful '
        }) 
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            msg: 'The email or phone number has already been registered '
        })
        
    }
})

app.post('/api/login', async (req,res) => {
    

    const user = await User.findOne({
        email: req.body.email,
    })

    if(!user) {
        
        return res.status(400).send({
            msg: 'The email does not exist '
        })
    }

    const isPasswordValid = require('bcrypt').compareSync(
        req.body.password,
        user.password
    )

    if(!isPasswordValid){
        return res.status(400).send({
            msg: 'The password was incorrect '
        })
    }
    
    const token = jwt.sign({
        id: String(user._id)
    }, SECRET)
    
    res.status(200).send({
            msg: 'login successful',
            data: {
                token,
                user
            }
        })

})

const auth = async (req,res,next) => {
    const raw = String(req.headers.authorization).split(' ').pop()
    const {id} = jwt.verify(raw, SECRET)
    req.user = await User.findById(id) 
    next() 
}

app.post('/api/profile', auth, async (req,res) => {
    res.status(200).send({
        msg: 'get profile successful',
        data: req.user
    })
})

app.listen(8888);