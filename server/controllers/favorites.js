const models = require('../models')

const Favorite = models.favorites
const User = models.users
const Webtoon = models.webtoons

exports.index = async (req, res) => {
    try{
        await Favorite.findAll({
            where:{id_user: req.params.id},
            include: [{
                model: Webtoon,
                as: "webtoonId"
            }],
            order: [
                ['createdAt', 'DESC']
            ]
        }
        ).then(result=> res.send(result))
    }catch(err){
        res.send({
            err
        })
    }
}

exports.show = async (req, res) => {
    try{
        await Favorite.findOne({
            where:{id: req.params.id},
            include: [{
                model: Webtoon,
                as: "webtoonId"
            }],
            order: [
                ['createdAt', 'DESC']
            ]
        }
        ).then(result=> res.send(result))
    }catch(err){
        err
    }
}

exports.store = async (req, res) => {
    try{
        await Favorite.create(req.body).then(result=> {
            res.send({
                message: "success",
                result
            })
        })
    }catch(err){
        res.send({
            err
        })
    }
}

exports.update = async (req, res) => {
    try{
        await Favorite.update(
            req.body,
            {where: {id: req.params.id}}
        ).then(result=> {
            res.send({
                message: "success",
                result
            })
        })
    }catch(err){
        res.send({
            err
        })
    }
}

exports.delete = async (req, res) => {
    try{
        await Favorite.destroy({where: {id: req.params.id}}).then(result=> {
            res.send({
                message: "success",
                result
            })
        })
    }catch(err){
        res.send({
            err
        })
    }
}
