import colors from 'colors'
import fs from 'fs'


export function requestTime(req, res, next) {
    req.requestTime = Date.now()
    next()
}

export function logger(req, res, next) {
    console.log(colors.bgGreen.black(`Req.tile: ${req.requestTime}`))
    next()
}

export function creator(req, res, next) {
    fs.writeFileSync('req.txt', typeof req.body)
    next()
}