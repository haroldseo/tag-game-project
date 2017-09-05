var player1 = $("#player1")
var player2 = $("#player2")

player1.css({
    left: 10,
    top: 310
})
player2.css({
    left: 910,
    top: 310
})

$("#playingField").append(player1, player2)
