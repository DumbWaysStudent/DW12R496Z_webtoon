const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())

//controllers
const AuthController = require('./controllers/auth')
const WebtoonController = require('./controllers/webtoons')
const EpisodeController = require('./controllers/episodes')
const FavoriteController = require('./controllers/favorites')
const ImageController = require('./controllers/images')

//middlewares
const { authenticated } = require('./middleware')

app.group("/api/v1", (router) => {

    router.post('/login', AuthController.login)
    router.post('/register', AuthController.register)    
    
    //webtoon API
    router.get('/webtoons', WebtoonController.index)    
    router.get('/webtoon/:keyword', WebtoonController.search)
    router.get('/webtoon/:id', WebtoonController.show)    
    router.post('/webtoon', WebtoonController.store)    
    router.patch('/webtoon/:id', WebtoonController.update)    
    router.delete('/webtoon/:id', WebtoonController.delete)

    //episode API
    router.get('/episodes', EpisodeController.index)    
    router.get('/episode/:id', EpisodeController.show)    
    router.post('/episode', EpisodeController.store)    
    router.patch('/episode/:id', EpisodeController.update)    
    router.delete('/episode/:id', EpisodeController.delete)


    //favorite API
    router.get('/favorites/:id', FavoriteController.index)    
    router.get('/favorite/:id', FavoriteController.show)    
    router.post('/favorite', FavoriteController.store)    
    router.patch('/favorite/:id', FavoriteController.update)    
    router.delete('/favorite/:id', FavoriteController.delete)

    //Image API
    router.get('/images', ImageController.index)    
    router.get('/image/:id', ImageController.show)    
    router.post('/image', ImageController.store)    
    router.patch('/image/:id', ImageController.update)    
    router.delete('/image/:id', ImageController.delete)    

})


app.listen(port, () => console.log(`Listening on port ${port}!`))