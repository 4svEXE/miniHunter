const qs = el => document.querySelector(el)
const qsa = el => document.querySelectorAll(el)
const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))

function randBool() {
  if (random(0,1) == 1) {
    return true;
  } else {
    return false;
  }
}

qs('body').insertAdjacentHTML('beforeend', `<div class="scripts"></div>`)

const require = (src, defer = true) =>{
	const sript = document.createElement('script')
	sript.src = src
	sript.defer = defer
	sript.async = true
	qs('.scripts').appendChild(sript)
  console.log('script addet', src);
}

require('js/requires.js')
