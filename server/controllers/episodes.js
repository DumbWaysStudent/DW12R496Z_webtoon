const models = require('../models')
const Episode = models.episodes
const Webtoon = models.webtoons

exports.index = async (req, res) => {
    await Episode.findAll({
        include: [{
            model: Webtoon,
            as: "webtoonId"
        }]
    }).then(result=>res.send(result))
}

exports.show = async (req, res) => {
    await Episode.findOne({
        where:{id: req.params.id},
        include: [{
            model: Webtoon,
            as: "webtoonId"
        }]
    }
    ).then(result=> res.send(result))
}

exports.store = async (req, res) => {
    await Episode.create(req.body).then(result=> {
        res.send({
            message: "success",
            result
        })
    })
}

exports.update = async (req, res) => {
    await Episode.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(result=> {
        res.send({
            message: "success",
            result
        })
    })
}

exports.delete = async (req, res) => {
    await Episode.destroy({where: {id: req.params.id}}).then(result=> {
        res.send({
            message: "success",
            result
        })
    })
}
