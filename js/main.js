var $player1 = $("#player1")
var $player2 = $("#player2")

$player1.css({
    left: 10,
    top: 310
})
$player2.css({
    left: 910,
    top: 310
})

$("#playingField").append($player1, $player2)

//--------------------------
var $p1Move = $player1
$(document).keydown(function(e) {
    if(e.keyCode === 37) {
        $p1Move.css("left", ($p1Move.position().left - 30) + "px");
    } else if (e.keyCode === 39) {
        $p1Move.css("left", ($p1Move.position().left + 30) + "px");
    } else if (e.keyCode === 38) {
        $p1Move.css("top", ($p1Move.position().top - 30) + "px");
    } else if (e.keyCode === 40) {
        $p1Move.css("top", ($p1Move.position().top + 30) + "px");
    }
})

var $p2Move = $player2
$(document).keydown(function(e) {
    if(e.keyCode === 65) {
        $p2Move.css("left", ($p2Move.position().left - 30) + "px");
    } else if (e.keyCode === 68) {
        $p2Move.css("left", ($p2Move.position().left + 30) + "px");
    } else if (e.keyCode === 87) {
        $p2Move.css("top", ($p2Move.position().top - 30) + "px");
    } else if (e.keyCode === 83) {
        $p2Move.css("top", ($p2Move.position().top + 30) + "px");
    }
})

