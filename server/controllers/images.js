const models = require('../models')
const Image = models.images
const Episode = models.episodes

exports.index = (req, res) => {
    Image.findAll({
        include: [{
            model: Episode,
            as: "idEpisode"
        }]
    }).then(result=>res.send(result))
}

exports.show = (req, res) => {
    Image.findOne({
        where:{id: req.params.id},
        include: [{
            model: Episode,
            as: "idEpisode"
        }]
    }
    ).then(result=> res.send(result))
}

exports.store = (req, res) => {
    Image.create(req.body).then(result=> {
        res.send({
            message: "success",
            result
        })
    })
}

exports.update = (req, res) => {
    Image.update(
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
    Image.destroy({where: {id: req.params.id}}).then(result=> {
        res.send({
            message: "success",
            result
        })
    })
}
