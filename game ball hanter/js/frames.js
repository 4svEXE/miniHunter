function addBall(){
	ball.forEach((b, id) => {
		ctx.beginPath();
		ctx.arc(b.x , b.y , b.size , 0, 2 * Math.PI, true);
		ctx.fillStyle = b.color;
		ctx.fill();

		ballMovement(id)
	})
}

function addPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size)
		ctx.fill();

			// ctx.beginPath();
			// ctx.arc(player.x , player.y , player.size , 0, 2 * Math.PI, true);
			// ctx.fillStyle = player.color;
			// ctx.fill();

		//ballMovement(id)
}
