const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const volPluss = document.querySelector('.vol-pluss')
const volMinus = document.querySelector('.vol-minus')
const feeder = document.querySelector('.feeder')

var xhr = new XMLHttpRequest()


pause.onclick = function () {
    xhr.open('GET', '/pause', false)
    xhr.send()
}

play.onclick = function () {
    xhr.open('GET', '/play', false)
    xhr.send()
}

prev.onclick = function () {
    xhr.open('GET', '/prev', false)
    xhr.send()
}

next.onclick = function () {
    xhr.open('GET', '/next', false)
    xhr.send()
}

volPluss.onclick = function () {
    xhr.open('GET', '/vol-pluss', false)
    xhr.send()
}

volMinus.onclick = function () {
    xhr.open('GET', '/vol-minus', false)
    xhr.send()
}

feeder.onclick = function () {
    xhr.open('GET', '/feeder', false)
    xhr.send()
}