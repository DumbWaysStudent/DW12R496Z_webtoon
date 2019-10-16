const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const models = require('../models')
const User = models.users


exports.login = async (req, res)=>{    

    const email = req.body.email
    const password = req.body.password 

    await User.findOne({where: {email}}).then(user=>{
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(result){
                    const token = jwt.sign({ userId: user.id }, 'RahasiaIlahi');
                    res.send({
                        message:"Success!",
                        data:{
                            userId:user.id,
                            token
                        }
                    }) 
                }else{
                    res.send({
                        error: true,
                        message: "Wrong Password!"
                    })                    
                }
            });            
        }else{
            res.send({
                error: true,
                email,
                message: "Wrong Email!"
            })
        }
    })        

}

exports.register = (req, res)=>{
    const email = req.body.email
    const password = req.body.password //use encryption in real world case!
    const name = req.body.name

    bcrypt.hash(password, 10, function(err, hash) {
        User.create({
            name,
            email,
            password: hash
        }).then(user=> {
            res.send({
                message: "success",
                user: {
                    name,
                    email
                }
            })
        }).catch(err=>{
            console.log(err)
        })            

    });   

}