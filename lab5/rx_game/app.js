var move = {
    UP: 1,
    RIGHT: 2,
    DOWN: 3,
    LEFT: 4
};

var circle = document.getElementById("circle");
circle.style.top = 500 + "px";
circle.style.left = 500  + "px";

function randomMove() {
    var x = Math.floor(Math.random() * 4 + 1);
    switch (x) {
        case 1:
            return move.UP;
        case 2:
            return move.RIGHT;
        case 3:
            return move.DOWN;
        case 4:
            return move.LEFT;
        default:
            break;
    }
}

function moveShape(x_dir, y_dir, shape) {

    var y = parseInt(shape.style.top);
    shape.style.top = (y + y_dir) + "px";

    var x = parseInt(shape.style.left);
    shape.style.left = (x + x_dir) + "px";

}

Rx.Observable
    .timer(0, 500)
    .map(function (x) {
     return randomMove()
    })
    .subscribe({
        next: function (x) {
            var move_length = 50;
            switch (x) {
                case move.UP : {
                    moveShape(move_length, 0, circle);
                    console.log("poruszam sie do gory");
                    break;
                }
                case move.DOWN : {
                    moveShape(-move_length, 0,  circle);
                    console.log("poruszam sie do dolu");
                    break;
                }
                case move.LEFT : {
                    moveShape(0, -move_length, circle);
                    console.log("poruszam sie w lewo");
                    break;
                }
                case move.RIGHT : {
                    moveShape(0, move_length, circle);
                    console.log("poruszam sie w prawo");
                    break;
                }
                default:
                    break;
            }
        }
    });