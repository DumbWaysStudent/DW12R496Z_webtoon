const models = require('../models')
const Episode = models.episodes
const Webtoon = models.webtoons
const Image = models.images

exports.index = async (req, res) => {
    try{
        await Episode.findAll({
            include: [{
                model: Webtoon,
                as: "webtoonData"
            }],
            order: [
                ['createdAt', 'DESC']
            ],
        }).then(result=>res.send(result))
    }catch(err){
        res.send({
            message: "error",
            err
        })
    }
}

exports.show = async (req, res) => {
    try{
        await Episode.findAll({
            where:{webtoon_id: req.params.id},
            include: [{
                model: Webtoon,
                as: "webtoonData"
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


exports.store = async (req, res) => {
    try{
        await Episode.create(req.body).then(result=> {
            res.send({
                message: "success",
                result
            })
        })    
    }catch(err){
        res.send({
            message: "error",
            err,
            req:req.body
        })
    }
}

exports.update = async (req, res) => {
    try{
        await Episode.update(
            req.body,
            {where: {id: req.params.id}}
        ).then(result=> {
            res.send({
                message: "success",
                req:req.body
            })
        })
    }catch(err){
        err
    }
}

exports.delete = async (req, res) => {
    try{
        await Episode.destroy({where: {id: req.params.id}}).then(result=> {
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
