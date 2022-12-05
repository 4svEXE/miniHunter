function spawnBall() {
  let prop = {}
  if (random(1,10) == 1) {
    prop.type = 'positive'
  } else {
    prop.type = 'negative'
  }

  if (randBool()) {
    prop.x = 0
    prop.y = random(0, canvas.height)
  } else {
    prop.x = random(0, canvas.width)
    prop.y = 0
  }

  prop.speed = random(1,3)
  prop.size = random(1,3)

  if (prop.type == 'positive') {
    prop.color = colors[random(0, colors.length)]
  } else {
    prop.color = 'red'
  }

  ball.push(new Ball(prop.x, prop.y, prop.speed, prop.size, prop.color, prop.type))
}
