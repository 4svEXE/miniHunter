class Ball {
  constructor(x = 10, y = 10, speed = 1, size = 1, color = '#fff', type = 'positive') {
    this.x = x
    this.y = y
    this.speed = speed
    this.size = size
    this.color = color
    this.type = type
    this.angle = {
      x: randBool(),
    	y: randBool(),
    }
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
}

function newRandomBall() {
  let ball = {}
  ball.x = random(5, window.screen.width)
  ball.y = random(5, window.screen.height)
  ball.speed = random(1, 2)/10
  ball.size = random(1, 3)
  ball.color = colors[random(0, colors.length - 1)]

  return new Ball(ball.x, ball.y, ball.speed, ball.size, ball.color);
}

if	(typeof colors == 'undefined' )  {
  var colors = ['#333', '#888', '#aaa', '#ccc', '#fff']
}