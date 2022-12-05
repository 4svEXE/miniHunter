qs('.game').insertAdjacentHTML('beforeend', `<canvas id="brakeout"></canvas>`)

const canvas = qs('canvas'), ctx = canvas.getContext('2d')

canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

canvas.style.background = '#000'

window.addEventListener(`resize`, event => {
	canvas.width = document.body.clientWidth
	canvas.height = document.body.clientHeight
}, false);

const clearScene = () => ctx.clearRect(0, 0, canvas.width, canvas.height);