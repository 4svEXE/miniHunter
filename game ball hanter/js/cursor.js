let cursor = {x: 300,y: 300}

document.onmousemove = function(e) {
	cursor.x = event.clientX
	cursor.y = event.clientY
}

// mouse elements creator
let createBalls

qs('.game').onmousedown = function() {
		createBalls = setInterval(() => {
		   spawnBall()
		}, 100)
}

qs('.game').onmouseup = () => {
	clearInterval(createBalls);
}

setInterval(() => {
	spawnBall()
}, 1500)