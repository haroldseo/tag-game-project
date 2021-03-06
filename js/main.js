var $player1 = $("#player1")
var $player2 = $("#player2")
var $wall1 = $(".w1")
var $wall2 = $(".w2")

$player1.css({
    left: 10,
    top: 285
})
$player2.css({
    left: 860,
    top: 285
})
$wall1.css({
    left: 90,
    top: 80,
})
$wall2.css({
    left: 550,
    top: 450
})

$("#playingField").append($player1, $player2, $wall1, $wall2)

//--------------------------------------------------------
var p1s = document.querySelector("#p1Score")
var p2s = document.querySelector("#p2Score")
var heading = document.querySelector("h1")
var currentPlayer = 1

var intervalAddTime = null
var p1Movement = null
var p2Movement = null

function distance(p1, p2) {
    return Math.sqrt((p2.x-p1.x)*(p2.x-p1.x)+(p2.y-p1.y)*(p2.y-p1.y))
}

keyCodes = {left: 65, up: 87, right: 68, down: 83},
keys = [];

window.addEventListener('keydown', function (evt) {
    evt.preventDefault()
    keys[evt.keyCode] = true;
});
window.addEventListener('keyup', function (evt) {
    keys[evt.keyCode] = false;
});

keyCodes2 = {left: 37, up: 38, right: 39, down: 40},
keys2 = [];

window.addEventListener('keydown', function (evt) {
    evt.preventDefault()
    keys2[evt.keyCode] = true;
});
window.addEventListener('keyup', function (evt) {
    keys2[evt.keyCode] = false;
});

function setMovement() {
    p1Movement = setInterval(function() {
        // player 1
        // get position of div
        var x = parseInt($player1.position().left, 10),
            y = parseInt($player1.position().top, 10);
    
        // left/right
        if (keys[keyCodes.left] && $player1.position().left > 0) {
            x -= 1;
        } else if (keys[keyCodes.right] && $player1.position().left < 870) {
            x += 1;
        }
        // up/down
        if (keys[keyCodes.up] && $player1.position().top > 0) {
            y -= 1;
        } else if (keys[keyCodes.down] && $player1.position().top < 570) {
            y += 1;
        }
    
        // set div position
        $player1.css({
            left: x + 'px',
            top: y + 'px'
        })
    
        // collision detection
        if(currentPlayer === 1) {
            var d = distance({x:$player1.position().left, y:$player1.position().top}, {x:$player2.position().left, y:$player2.position().top}) 
            if(d <= 30) {
                clearInterval(intervalAddTime);
                p1s.innerText = seconds
                clearInterval(p1Movement);
                clearInterval(p2Movement);
                heading.innerText = "Tag, You're It! Now Switch!"
                heading.style.fontSize = "350%"
            }
        }
    }, 2);
    //----------------------------------------------------------------------
    
    p2Movement = setInterval(function () {
         // player 2
        var x = parseInt($player2.position().left, 10),
            y = parseInt($player2.position().top, 10);
    
        // left/right
        if (keys2[keyCodes2.left] && $player2.position().left > 0) {
            x -= 1;
        } else if (keys2[keyCodes2.right] && $player2.position().left < 870) {
            x += 1;
        }
        // up/down
        if (keys2[keyCodes2.up] && $player2.position().top > 0) {
            y -= 1;
        } else if (keys2[keyCodes2.down] && $player2.position().top < 570) {
            y += 1;
        }   
    
        // set div position
        $player2.css({
            left: x + 'px',
            top: y + 'px'
        })
    
        if(currentPlayer === 2) {
            var d = distance({x:$player2.position().left, y:$player2.position().top}, {x:$player1.position().left, y:$player1.position().top}) 
            if(d <= 30) {
                clearInterval(intervalAddTime);
                p2s.innerText = seconds
                var p1Time = Number(p1s.innerText)
                var p2Time = Number(p2s.innerText)
                if(p1Time < p2Time){
                    heading.innerText = "Player 1 Wins!!"
                } else if (p1Time > p2Time) {
                    heading.innerText = "Player 2 Wins!!"
                } else {
                    heading.innerText = "It's a tie!"
                }
                heading.style.fontSize = "350%" 
                clearInterval(p1Movement)
                clearInterval(p2Movement)
            }
        }
    }, 2);
}

//----------------------------------------------------
// timer
var time = document.querySelector("#timer")
var startGame = document.querySelector("#SG")
var seconds = 0

function addTime() {
    seconds = seconds + 1
    time.innerText = "Time: " + seconds
}
//-----------------------------------------------------
// start button/reset
startGame.addEventListener("click", function() {
    seconds = 0
    time.innerText = "Time: " + 0
    $player1.css({
        left: 10,
        top: 285
    })
    $player2.css({
        left: 860,
        top: 285
    })
    intervalAddTime = setInterval(addTime, 1000)
    setMovement()
    heading.innerText = "Tag, You're It!"
    heading.style.fontSize = "200%"
    p1s.innerText = "0"
    p2s.innerText = "0"
    $player1.append("<div style='vertical-align: middle; line-height: 30px; font-size: 20px; color: rgb(66, 66, 66);'>IT</div>")
    $player2.text("")
    if(currentPlayer === 2) {
        currentPlayer = 1
    }
})

//----------------------------------------------------
// switch button
var nextPlayer = document.querySelector("#S")

nextPlayer.addEventListener("click", function() {
    seconds = 0
    time.innerText = "Time: " + 0
    $player1.css({
        left: 10,
        top: 285
    })
    $player2.css({
        left: 860,
        top: 285
    })
    heading.innerText = "Tag, You're It!"
    heading.style.fontSize = "200%"
    $player1.text("")
    $player2.append("<div style='vertical-align: middle; line-height: 30px; font-size: 20px; color: rgb(66, 66, 66);'>IT</div>")
    intervalAddTime = setInterval(addTime, 1000)
    if(currentPlayer === 1) {
        currentPlayer = 2
        setMovement()
    }
})

