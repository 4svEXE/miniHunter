document.addEventListener('keydown', function(e){
	switch (e.keyCode){
		case 37: //left
			player.move('left')
		break;
		case 38: //up
			player.move('up')
		break;
		case 39: //right
			player.move('right')
		break;
		case 40: //down
			player.move('down')
		break;
	}
})
