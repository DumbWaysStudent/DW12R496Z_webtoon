const models = require('../models')

const Favorite = models.favorites
const User = models.users
const Webtoon = models.webtoons

exports.index = (req, res) => {
    Favorite.findAll({
        where:{id_user: req.params.id},
        include: [{
            model: Webtoon,
            as: "webtoonId"
        }]
    }
    ).then(result=> res.send(result))
}

exports.show = (req, res) => {
    Favorite.findOne({
        where:{id: req.params.id},
        include: [{
            model: Webtoon,
            as: "webtoonId"
        }]
    }
    ).then(result=> res.send(result))
}

exports.store = (req, res) => {
    Favorite.create(req.body).then(result=> {
        res.send({
            message: "success",
            result
        })
    })
}

exports.update = (req, res) => {
    Favorite.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(result=> {
        res.send({
            message: "success",
            result
        })
    })
}

exports.delete = (req, res) => {
    Favorite.destroy({where: {id: req.params.id}}).then(result=> {
        res.send({
            message: "success",
            result
        })
    })
}
