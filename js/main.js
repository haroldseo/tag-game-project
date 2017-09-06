var $player1 = $("#player1")
var $player2 = $("#player2")

$player1.css({
    left: 10,
    top: 285
})
$player2.css({
    left: 860,
    top: 285
})

$("#playingField").append($player1, $player2)

//--------------------------------------------------------

function distance(p1, p2) {
    return Math.sqrt((p2.x-p1.x)*(p2.x-p1.x)+(p2.y-p1.y)*(p2.y-p1.y))
}

keyCodes = {left: 65, up: 87, right: 68, down: 83},
keys = [];

window.addEventListener('keydown', function (evt) {
    keys[evt.keyCode] = true;
});
window.addEventListener('keyup', function (evt) {
    keys[evt.keyCode] = false;
});

setInterval(function () {
    // player 1
    // get position of div
    var x = parseInt($player1.position().left, 10),
        y = parseInt($player1.position().top, 10);

    // left/right
    if (keys[keyCodes.left] && $player1.position().left > 0 ) {
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

    var d = distance({x:$player1.position().left, y:$player1.position().top}, {x:$player2.position().left, y:$player2.position().top}) 
        if(d <= 30) {
            console.log("gotcha")
        }

}, 1/30);


keyCodes2 = {left: 37, up: 38, right: 39, down: 40},
keys2 = [];

window.addEventListener('keydown', function (evt) {
    keys2[evt.keyCode] = true;
});
window.addEventListener('keyup', function (evt) {
    keys2[evt.keyCode] = false;
});

setInterval(function () {
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

}, 1/30);

