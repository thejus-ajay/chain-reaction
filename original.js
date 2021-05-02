var row = 6
var playernumber = 1;
var charaterArry = ['.', '😎', '💥', '👽', '🤡', '🐲','🌛','👑','🧡','💛','💚','💙','💜','🤎','🖤','⚽','💗','🔴','🟠','🟡','🟢','🔵','🟣','🟤','⚫','🎱']
var numberOfPlayer = 2;

function on() {
  document.getElementById('game').style.pointerEvents = 'none'
  document.getElementById('game').style.opacity = '0.4'
  
  document.querySelector('body').style.height = '100vh'
  document.querySelector('body').style.overflow = 'hidden'
  document.getElementById('overlay').style.display = 'inline-block'
}

function off() {
  document.getElementById('game').style.pointerEvents = 'auto'
  document.getElementById('game').style.opacity = '1'

  document.querySelector('body').style.height = ''
  document.querySelector('body').style.overflow = 'auto'
  document.getElementById('overlay').style.display = 'none'
  var p = document.getElementById('players-input').value
  p = Number(p)
  if (p <= 25) numberOfPlayer = p
  else numberOfPlayer = 25
}


var sHeight = window.innerHeight

var col = 9
// if(sHeight > 400) col = 5
// if(sHeight > 630) col = 27
// if(sHeight > 800) col = 14
// if(sHeight > 1000) col = 10

// var htmlElement = document.getElementsByTagName('html')[0]
// if(row>=5) htmlElement.style.fontSize = '40%'
// if(row>=10) htmlElement.style.fontSize = '40%'

// console.log(document.getElementsByTagName('html')[0].style.fontSize)



var n = row * col
var Values = new Array(n + 1).fill(0);
var playerPosition = new Array(n + 1).fill(0);
for (var i = 1; i < col * row + 1; i++) {
  var btn = document.createElement('BUTTON')
  document.getElementById('game').appendChild(btn)
  btn.id = i
  document.getElementById(i).classList.add('box1')
  
  btn.setAttribute('class', 'center')
  document.getElementById(i).onclick = function () {
    if (numberOfPlayer == 0) numberOfPlayer = 2
 if (numberOfPlayer > 25) numberOfPlayer = 25

    // if (playerPosition[this.id] == (playernumber - 1)|| playerPosition[this.id] == 0) {
    ChainReaction(this)
    // }
    for (var j = 1; j <= n; j++) {
      if (Values[j] == 0) {
        // console.log(playerPosition[j]);
        document.getElementById(j).style.color = 'white'
        document.getElementById(j).innerHTML = "✉"
      }
      if (Values[j] == 1) {
        // console.log(playerPosition[j]);
        // document.getElementById(`span-${j}`).style.position = 'absolute'
        document.getElementById(j).innerHTML = `<span id='span-${j}-1'>${charaterArry[playerPosition[j]]}</span>`
      }
      if (Values[j] == 2) {
        // console.log(playerPosition[j]);
        document.getElementById(j).innerHTML = `<span id='span-${j}-1'>${
          charaterArry[playerPosition[j]]
        }</span><span id='span-${j}-2'>${charaterArry[playerPosition[j]]}</span>`
        document.getElementById(`span-${j}-1`).style.position = 'absolute'
        document.getElementById(`span-${j}-1`).style.left = '0.7rem'
      }
      if (Values[j] == 3) {
        // console.log(playerPosition[j]);
        document.getElementById(j).innerHTML = `<span id='span-${j}-1'>${
          charaterArry[playerPosition[j]]
        }</span><span id='span-${j}-2'>${
          charaterArry[playerPosition[j]]
        }</span><span id='span-${j}-3'>${charaterArry[playerPosition[j]]}</span>`
        document.getElementById(`span-${j}-1`).style.position = 'absolute'
        document.getElementById(`span-${j}-1`).style.top = '0.4rem'
        document.getElementById(`span-${j}-1`).style.right = '1rem'
        document.getElementById(`span-${j}-2`).style.position = 'absolute'
        document.getElementById(`span-${j}-2`).style.left = '1rem'
        document.getElementById(`span-${j}-2`).style.top = '0.4rem'
        document.getElementById(`span-${j}-3`).style.position = 'relative'
        document.getElementById(`span-${j}-3`).style.zIndex = '1'
      }
    }

  }
  // document.getElementById(i).innerHTML = i;
  if (i % row == 0) {
    // creating space

    var br = document.createElement('br')
    document.getElementById('game').appendChild(br)
  }

  if (i == 1) {
    btn.setAttribute('class', 'cornerOne')
  }
  if (i == row) {
    btn.setAttribute('class', 'cornerTwo')
  }
  if (i == n - row + 1) {
    btn.setAttribute('class', 'cornerThree')
  }
  if (i == n) {
    // marking the corners

    btn.setAttribute('class', 'cornerFour')
  }
  if (i > 1 && i < row) {
    btn.setAttribute('class', 'sideTop')
  }
  if (i % row == 0 && i != row && i != n) {
    btn.setAttribute('class', 'sideRight')
  }
  if ((i - 1) % row == 0 && i != 1 && i != n - row + 1) {
    btn.setAttribute('class', 'sideLeft')
  }
  if (i > n - row + 1 && i < n) {
    btn.setAttribute('class', 'sideDown')
  }
}

function ChainReaction(e) {
  var c = e.className
  var z = e.id
  // console.log(z,playerPosition[z],playernumber);
  if (playerPosition[z] == playernumber || playerPosition[z] == 0) {
    var dotMinusOne = Values[e.id]

    function cornerOne(id) {
      var element = document.getElementById(id)
      var classes = element.className
      if (classes == 'cornerOne') {
        var dot = Values[id] + 1
        Values[id] = dot
        // console.log(playernumber);
        playerPosition[id] = playernumber;
        // console.log(dot)
        if (dot > 1) {
          dot = 0
          playerPosition[id] = 0;
          Values[id] = dot
          // console.log('in cornerOne')
          var t = 2
          var u = Number(id) + row

          sideTop(t)
          sideLeft(u)
        }
      }
    }

    function sideTop(id) {
      var element = document.getElementById(id)
      var classes = element.className
      if (classes == 'sideTop') {
        var dot = Values[id] + 1
        Values[id] = dot
        playerPosition[id] = playernumber;
        if (dot > 2) {
          dot = 0
          playerPosition[id] = 0;
          Values[id] = dot
          var t = Number(id) + 1
          var u = Number(id) - 1
          var v = Number(id) + row
          cornerOne(u)
          cornerTwo(t)
          sideTop(t)
          sideTop(u)
          center(v)
        }
      }
    }
    function cornerTwo(id) {
      var element = document.getElementById(id)
      var classes = element.className
      if (classes == 'cornerTwo') {
        var dot = Values[id] + 1
        Values[id] = dot
        playerPosition[id] = playernumber;
        if (dot > 1) {
          dot = 0
          playerPosition[id] = 0;
          Values[id] = dot
          // console.log('in cornerTwo')
          var t = Number(id) - 1
          var u = Number(id) + row
          sideTop(t)
          sideRight(u)
        }
      }
    }
    function sideLeft(id) {
      var element = document.getElementById(id)
      var classes = element.className
      if (classes == 'sideLeft') {
        var dot = Values[id] + 1
        Values[id] = dot
        playerPosition[id] = playernumber;
        if (dot > 2) {
          dot = 0
          playerPosition[id] = 0;
          Values[id] = dot
          // console.log('in sideLeft')
          var t = Number(id) - row
          var u = Number(id) + row
          var v = Number(id) + 1
          cornerOne(t)
          sideLeft(u)
          sideLeft(t)
          center(v)
          cornerThree(u)
        }
      }
    }
    function center(id) {
      var element = document.getElementById(id)

      var classes = element.className
      if (classes == 'center') {
        var dot = Values[id] + 1
        Values[id] = dot
        playerPosition[id] = playernumber;
        if (dot > 3) {
          // console.log(element)
          dot = 0
          playerPosition[id] = 0;
          Values[id] = dot
          // console.log('in center')
          var t = Number(id) - row
          var u = Number(id) + row
          var v = Number(id) + 1
          var w = Number(id) - 1
          sideLeft(w)
          center(t)
          center(u)
          center(v)
          center(w)
          sideTop(t)
          sideRight(v)
          sideDown(u)
        }
      }
    }
    function sideRight(id) {
      var element = document.getElementById(id)
      var classes = element.className
      if (classes == 'sideRight') {
        var dot = Values[id] + 1
        Values[id] = dot
        playerPosition[id] = playernumber;
        if (dot > 2) {
          dot = 0
          playerPosition[id] = 0;
          Values[id] = dot
          // console.log('in sideRight')
          var t = Number(id) - row
          var u = Number(id) + row
          var v = Number(id) - 1
          cornerTwo(t)
          cornerFour(u)
          center(v)
          sideRight(t)
          sideRight(u)
        }
      }
    }
    function cornerThree(id) {
      var element = document.getElementById(id)
      var classes = element.className
      if (classes == 'cornerThree') {
        var dot = Values[id] + 1
        Values[id] = dot
          playerPosition[id] = playernumber;
        if (dot > 1) {
          dot = 0
          playerPosition[id] = 0;
          Values[id] = dot
          // console.log('in cornerThree')
          var t = Number(id) + 1
          var u = Number(id) - row
          sideDown(t)
          sideLeft(u)
        }
      }
    }
    function sideDown(id) {
      var element = document.getElementById(id)
      var classes = element.className
      if (classes == 'sideDown') {
        var dot = Values[id] + 1
        Values[id] = dot
        playerPosition[id] = playernumber;
        if (dot > 2) {
          dot = 0
          playerPosition[id] = 0;
          Values[id] = dot
          // console.log('in sideDown')
          var t = Number(id) - row
          var u = Number(id) + 1
          var v = Number(id) - 1
          cornerThree(v)
          cornerFour(u)
          sideDown(u)
          sideDown(v)
          center(t)
        }
      }
    }
    function cornerFour(id) {
      var element = document.getElementById(id)
      var classes = element.className
      if (classes == 'cornerFour') {
        var dot = Values[id] + 1
        Values[id] = dot
        playerPosition[id] = playernumber;
        if (dot > 1) {
          dot = 0
          playerPosition[id] = 0;
          Values[id] = dot
          // console.log('in cornerFour')
          var t = Number(id) - 1
          var u = Number(id) - row
          sideDown(t)
          sideRight(u)
        }
      }
    }
    // console.log(playerPosition);
    //calling the functions
    if (c == 'cornerOne') {
      cornerOne(e.id)
    }
    if (c == 'cornerTwo') {
      cornerTwo(e.id)
    }
    if (c == 'cornerThree') {
      cornerThree(e.id)
    }
    if (c == 'cornerFour') {
      cornerFour(e.id)
    }
    if (c == 'sideTop') {
      sideTop(e.id)
    }
    if (c == 'sideLeft') {
      sideLeft(e.id)
    }
    if (c == 'sideRight') {
      sideRight(e.id)
    }
    if (c == 'sideDown') {
      sideDown(e.id)
    }
    if (c == 'center') {
      center(e.id)
    }
    for (var j = 1; j <= n; j++) {
      document.getElementById(j).innerHTML = Values[j]
    }
    // console.log(playernumber);
    playernumber++;
    if (playernumber == (numberOfPlayer + 1)) {
      playernumber = 1;
    }
  }
}

