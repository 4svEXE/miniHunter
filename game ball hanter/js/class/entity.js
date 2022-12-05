class Entity{
  constructor(type = 'player', x = 400, y = canvas.height / 2, size = allSize) {
    this.type = type
    this.x = x
    this.y = y
    this.size = size
    this.color = eval('blocksTypes.'+ this.type +'.color')

    this.health = 100

    this.gravity = true
    this.gravResist = false
    this.dbClick = false

    this.jumpHeight = this.size
    this.inertion = Math.floor(this.veight / 3)
  }

  get top() {
    return Math.floor(this.y)
  }
  get bot() {
    return Math.floor(this.y + this.size)
  }
  get right() {
    return Math.floor(this.x + this.size)
  }
  get left() {
    return Math.floor(this.x)
  }

  set top(val) {
    this.y = val
  }
  set bot(val) {
    this.y = val - this.size
  }

  
  borderCollision() {
    if (this.top <= 0 || this.left <= 0) {
      return true;
    }
    if (this.bot >= canvas.height || this.right >= canvas.width) {
      return true;
    }
    return false
  }
///////////////////////////////////
  jump(direction) {

  }
///////////////////////////////////

  move(direction) {
      let i = 0
      let movInterval = setInterval(() => {

        if (!this.borderCollision()) {
    			switch (direction) {
    				case 'left': //left
    					this.x -= this.size / 10
    				break;
    				case 'up': //up
    					this.y -= this.size / 10
    				break;
    				case 'right': //right
    					this.x += this.size / 10
    				break;
    				case 'down': //down
    					this.y += this.size / 10
    				break;
          }
        } else {
          switch (direction){
            case 'left': //left
              this.x += this.size
            break;
              case 'up': //up
            this.y += this.size
              break;
            case 'right': //right
              this.x -= this.size
            break;
            case 'down': //down
              this.y -= this.size
            break;
          }
        }

    	if (++i == this.jumpHeight) {
        clearInterval(movInterval)
      }
    }, 300/fps)
  }

  showBorders() {
  	ctx.beginPath();
  	ctx.moveTo(this.left, this.top);
  	ctx.lineTo(this.right, this.top);
  	ctx.lineTo(this.right, this.bot);
  	ctx.lineTo(this.left, this.bot);
  	ctx.closePath();
    ctx.strokeStyle = "red";
  	ctx.stroke();
  }
}
