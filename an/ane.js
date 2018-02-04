const canvas = document.getElementById('cas')
const ocas = document.createElement('canvas')
const octx = ocas.getContext('2d')
const ctx = canvas.getContext('2d')
ocas.width = canvas.width = window.innerWidth
ocas.height = canvas.height = window.innerHeight
const bigbooms = []

function drawMoon() {
  const moon = document.getElementById('moon')
  const centerX = canvas.width - 200
  const centerY = 100
  const width = 80
  if (moon.complete) {
    ctx.drawImage(moon, centerX, centerY, width, width)
  } else {
    moon.onload = function () {
      ctx.drawImage(moon, centerX, centerY, width, width)
    }
  }
  let index = 0
  for (let i = 0; i < 10; i++) {
    ctx.save()
    ctx.beginPath()
    ctx.arc(centerX + width / 2, centerY + width / 2, width / 2 + index, 0, 2 * Math.PI)
    ctx.fillStyle = 'rgba(240,219,120,0.005)'
    index += 2
    ctx.fill()
    ctx.restore()
  }
}

Array.prototype.foreach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== null) callback.apply(this[i], [i])
  }
}

const raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) }
 
canvas.onclick = function () {
  const x = event.clientX
  const y = event.clientY
  const bigboom = new Boom(getRandom(canvas.width / 3, canvas.width * 2 / 3), 2, '#FFF', {x, y})
  bigbooms.push(bigboom)
}

var Boom = function (x, r, c, boomArea, shape) {
  this.booms = []
  this.x = x
  this.y = (canvas.height + r)
  this.r = r
  this.c = c
  this.shape = shape || false
  this.boomArea = boomArea
  this.theta = 0
  this.dead = false
  this.ba = parseInt(getRandom(80, 200))
}
Boom.prototype = {
  _paint() {
    ctx.save()
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    ctx.fillStyle = this.c
    ctx.fill()
    ctx.restore()
  },
  _move() {
    let dx = this.boomArea.x - this.x, 
      dy = this.boomArea.y - this.y
    this.x = this.x + dx * 0.01
    this.y = this.y + dy * 0.01

    if (Math.abs(dx) <= this.ba && Math.abs(dy) <= this.ba) {
      if (this.shape) {
        this._shapBoom()
      } else this._boom()
      this.dead = true
    } else {
      this._paint()
    }
  },
  _drawLight() {
    ctx.save()
    ctx.fillStyle = 'rgba(255,228,150,0.3)'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r + 3 * Math.random() + 1, 0, 2 * Math.PI)
    ctx.fill()
    ctx.restore()
  },
  _boom() {
    const fragNum = getRandom(30, 200)
    const style = getRandom(0, 10) >= 5 ? 1 : 2
    let color
    if (style === 1) {
      color = {
        a: parseInt(getRandom(128, 255)),
        b: parseInt(getRandom(128, 255)),
        c: parseInt(getRandom(128, 255)),
      }
    }

    const fanwei = parseInt(getRandom(300, 400))
    for (let i = 0; i < fragNum; i++) {
      if (style === 2) {
        color = {
          a: parseInt(getRandom(128, 255)),
          b: parseInt(getRandom(128, 255)),
          c: parseInt(getRandom(128, 255)),
        }
      }
      const a = getRandom(-Math.PI, Math.PI)
      const x = getRandom(0, fanwei) * Math.cos(a) + this.x
      const y = getRandom(0, fanwei) * Math.sin(a) + this.y 
      const radius = getRandom(0, 2)
      const frag = new Frag(this.x, this.y, radius, color, x, y)
      this.booms.push(frag)
    }
  },
  _shapBoom() {
    const that = this
    putValue(ocas, octx, this.shape, 5, dots => {
      const dx = canvas.width / 2 - that.x
      const dy = canvas.height / 2 - that.y
      for (let i = 0; i < dots.length; i++) {
        color = {a: dots[i].a, b: dots[i].b, c: dots[i].c}
        const x = dots[i].x
        const y = dots[i].y
        const radius = 1
        const frag = new Frag(that.x, that.y, radius, color, x - dx, y - dy)
        that.booms.push(frag)
      }
    })
  },
}

function putValue(canvas, context, ele, dr, callback) {
  context.clearRect(0, 0, canvas.width, canvas.height)
  const img = new Image()
  if (ele.innerHTML.indexOf('img') >= 0) {
    img.src = ele.getElementsByTagName('img')[0].src
    imgload(img, () => {
      context.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 2 - img.width / 2)
      dots = getimgData(canvas, context, dr)
      callback(dots)
    })
  } else {
    const text = ele.innerHTML
    context.save()
    const fontSize = 4
    context.font = `${fontSize}em 宋体 bold`
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillStyle = `rgba(${parseInt(getRandom(128, 255))},${parseInt(getRandom(128, 255))},${parseInt(getRandom(128, 255))} , 1)`
    context.fillText(text, canvas.width / 2, canvas.height / 2)
    context.restore()
    dots = getimgData(canvas, context, dr)
    callback(dots)
  }
}

function imgload(img, callback) {
  if (img.complete) {
    callback.call(img)
  } else {
    img.onload = function () {
      callback.call(this)
    }
  }
}

function getimgData(canvas, context, dr) {
  const imgData = context.getImageData(0, 0, canvas.width, canvas.height)
  context.clearRect(0, 0, canvas.width, canvas.height)
  const dots = []
  for (let x = 0; x < imgData.width; x += dr) {
    for (let y = 0; y < imgData.height; y += dr) {
      const i = (y * imgData.width + x) * 4
      if (imgData.data[i + 3] > 128) {
        const dot = {x, y, a: imgData.data[i], b: imgData.data[i + 1], c: imgData.data[i + 2]}
        dots.push(dot)
      }
    }
  }
  return dots
}

function getRandom(a, b) {
  return Math.random() * (b - a) + a
}


let maxRadius = 1, 
  stars = []
function drawBg() {
  for (let i = 0; i < 100; i++) {
    const r = Math.random() * maxRadius
    const x = Math.random() * canvas.width
    const y = Math.random() * 2 * canvas.height - canvas.height
    const star = new Star(x, y, r)
    stars.push(star)
    star.paint()
  }
}

var Star = function (x, y, r) {
  this.x = x; this.y = y; this.r = r
}
Star.prototype = {
  paint() {
    ctx.save()
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    ctx.fillStyle = `rgba(255,255,255,${this.r})`
    ctx.fill()
    ctx.restore()
  },
}

const focallength = 250
var Frag = function (centerX, centerY, radius, color, tx, ty) {
  this.tx = tx
  this.ty = ty
  this.x = centerX
  this.y = centerY
  this.dead = false
  this.centerX = centerX
  this.centerY = centerY
  this.radius = radius
  this.color = color
}

Frag.prototype = {
  paint() {
    ctx.save()
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fillStyle = `rgba(${this.color.a},${this.color.b},${this.color.c},1)`
    ctx.fill()
    ctx.restore()
  },
  moveTo(index) {
    this.ty = this.ty + 0.3
    let dx = this.tx - this.x, 
      dy = this.ty - this.y
    this.x = Math.abs(dx) < 0.1 ? this.tx : (this.x + dx * 0.1)
    this.y = Math.abs(dy) < 0.1 ? this.ty : (this.y + dy * 0.1)
    if (dx === 0 && Math.abs(dy) <= 80) {
      this.dead = true
    }
    this.paint()
  },
}


window.onload = function () {
  initAnimate()
}
  
function initAnimate() {
  drawBg()
  
  lastTime = new Date()
  animate()
}
  
let lastTime
function animate() {
  ctx.save()
  ctx.fillStyle = 'rgba(0,5,24,0.1)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.restore()
  
  
  const newTime = new Date()
  if (newTime - lastTime > 500 + (window.innerHeight - 767) / 2) {
    const random = Math.random() * 100 > 35
          // console.log(Math.random()*100)
    const x = getRandom(canvas.width / 5, canvas.width * 4 / 5)
    const y = getRandom(50, 200)
    if (random) {
      var bigboom = new Boom(getRandom(canvas.width / 3, canvas.width * 2 / 3), 2, '#FFF', {x, y})
      bigbooms.push(bigboom)
    } else {
      var bigboom = new Boom(getRandom(canvas.width / 3, canvas.width * 2 / 3), 2, '#FFF', {x: canvas.width / 2, y: 200}, document.querySelectorAll('.shape')[parseInt(getRandom(0, document.querySelectorAll('.shape').length))])
      bigbooms.push(bigboom)
    }
    lastTime = newTime
          // console.log(bigbooms)
  }
  
  stars.foreach(function () {
    this.paint()
  })
  
  drawMoon()
  
  bigbooms.foreach(function (index) {
    const that = this
    if (!this.dead) {
      this._move()
      this._drawLight()
    } else {
      this.booms.foreach(function (index) {
        if (!this.dead) {
          this.moveTo(index)
        } else if (index === that.booms.length - 1) {
          bigbooms[bigbooms.indexOf(that)] = null
        }
      })
    }
  })
      
  raf(animate)
}
  
