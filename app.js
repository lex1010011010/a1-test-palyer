import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import fs, { write } from 'fs'
import { requestTime, logger, creator } from './src/middlewares/middlewares.js'
import { XMLHttpRequest } from 'xmlhttprequest'

var xhr = new XMLHttpRequest()

const PORT = process.env.PORT ?? 3000
const app = express()
const __dirname = path.resolve()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'src', 'ejs'))
// console.log(app.get('view engine'))
// console.log(app.get('views'))

app.use(express.static(path.resolve(__dirname, 'src', 'styles')))
app.use(express.static(path.resolve(__dirname, 'src', 'scripts')))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(requestTime)
app.use(logger)
app.use(creator)

//Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'MainPage', active: 'main' })
})
app.get('/play', (req, res, next) => {
    res.send('Success');
    next()
    try {
        console.log('Play button has been push')
        xhr.open('GET', 'http://127.0.0.1:8080/requests/playlist.xml?command=pl_play', false)
        xhr.setRequestHeader("Authorization", "Basic " + btoa(":test"))
        xhr.send()
    } catch (error) {
        console.log(error)
    }
})

app.get('/pause', (req, res, next) => {
    res.send('Success');
    next()
    try {
        console.log('Pause button has been push')
        xhr.open('GET', 'http://127.0.0.1:8080/requests/playlist.xml?command=pl_pause', false)
        xhr.setRequestHeader("Authorization", "Basic " + btoa(":test"))
        xhr.send()
    } catch (error) {
        console.log(error)
    }
})

app.get('/prev', (req, res, next) => {
    res.send('Success');
    next()
    try {
        console.log('Prev button has been push')
        xhr.open('GET', 'http://127.0.0.1:8080/requests/playlist.xml?command=pl_previous', false)
        xhr.setRequestHeader("Authorization", "Basic " + btoa(":test"))
        xhr.send()
    } catch (error) {
        console.log(error)
    }
})

app.get('/next', (req, res, next) => {
    res.send('Success');
    next()
    try {
        console.log('Next button has been push')
        xhr.open('GET', 'http://127.0.0.1:8080/requests/playlist.xml?command=pl_next', false)
        xhr.setRequestHeader("Authorization", "Basic " + btoa(":test"))
        xhr.send()
    } catch (error) {
        console.log(error)
    }
})
app.get('/vol-pluss', (req, res, next) => {
    res.send('Success');
    next()
    try {
        console.log('Vol+ button has been push')

        xhr.open('GET', 'http://127.0.0.1:8080/requests/status.xml?command=volume&val=+10', false)
        xhr.setRequestHeader("Authorization", "Basic " + btoa(":test"))
        xhr.send()
    } catch (error) {
        console.log(error)
    }
})

app.get('/vol-minus', (req, res, next) => {
    res.send('Success');
    next()
    try {
        console.log('Vol- button has been push')
        xhr.open('GET', 'http://127.0.0.1:8080/requests/status.json?command=volume&val=-10', false)
        xhr.setRequestHeader("Authorization", "Basic " + btoa(":test"))
        xhr.send()
        if (xhr.status != 200) {
            // обработать ошибку
            console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
        } else {
            // вывести результат
            console.log(JSON.parse(xhr.responseText).volume); // responseText -- текст ответа.
        }
    } catch (error) {
        console.log(error)
    }
})

app.get('/feeder', (req, res, next) => {
    res.send('Success');
    next()
    try {
        console.log('Feeder button has been push')
        xhr.open('GET', 'http://127.0.0.1:8080/requests/status.json', false)
        xhr.setRequestHeader("Authorization", "Basic " + btoa(":test"))
        xhr.send()
        if (xhr.status != 200) {
            // обработать ошибку
            console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
        } else {
            // вывести результат
            console.log(xhr.responseText) // responseText -- текст ответа.
        }
        // console.log(req)
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)

})
