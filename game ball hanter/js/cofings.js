//
if	(typeof fps == 'undefined' )  {
    var fps = 60
}

//
if	(typeof sumOfBalls == 'undefined' )  {
    var sumOfBalls = 300;
}

const allSize = 20
//

if	(typeof colors == 'undefined' )  {
    var colors = ['#333', '#888', '#aaa', '#ccc', '#fff']
}

let blocksTypes = {
  ground : {
      color: 'rgba(200, 0, 200, 0.5)'
  },
  air : {
      color: 'rgba(0, 0, 200, 0.5)'
  },
  player : {
      color: 'rgba(0, 100, 200, 0.8)'
  },
}
