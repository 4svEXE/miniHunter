let platform = {x: 0,y: 0,	width: 0,}
let colorId = 0
let ball = []

// add balls in canvas
if	(typeof sumOfBalls == 'undefined' )  var sumOfBalls = 300;
if	(typeof fps == 'undefined' )  {
    var fps = 60
}

for (var i = 0; i < sumOfBalls; i++) {
	ball[i] = newRandomBall()
}

function frame() {
	clearScene()
	addBall()
	addPlayer()
	player.showBorders()

	if (random(1,60) == 1 && ball.length < sumOfBalls) {
		spawnBall()
	}

	document.querySelector('.score').innerHTML = `
		<span>current size ${player.size}</span>
		<span>target size 50</span>
		<span>кількість часток ${ball.length}</span>

	`
}

let game = setInterval(frame,1000/fps)
let play = false

play_Game.onclick = () => {
	if (!play) {
		play_Game.innerHTML = 'play'
		clearInterval(game)
	} else {
		play_Game.innerHTML = 'pause'
		game = setInterval(frame,1000/fps)
	}
	play = !play
}
