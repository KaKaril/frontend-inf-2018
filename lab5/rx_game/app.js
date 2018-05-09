var move = {
    UP: 1,
    RIGHT: 2,
    DOWN: 3,
    LEFT: 4,
    ARROW_UP: "ArrowUp",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
};

var circle = document.getElementById("circle");
circle.style.top = 500 + "px";
circle.style.left = 500 + "px";

var rectangle = document.getElementById("rectangle");
rectangle.style.top = 100 + "px";
rectangle.style.left = 100 + "px";

var refreshButton = document.getElementById("refresh");
Rx.Observable.fromEvent(refreshButton, 'click')
    .subscribe(function (x) {
            console.log("clicked button");
            location.reload();
        }
    );

var completed = false;

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

//Runner
Rx.Observable
    .timer(0, 500)
    .map(function (x) {
        return randomMove()
    })
    .subscribe({
        next: function (x) {
            if (!completed) {
                var move_length = 50;
                switch (x) {
                    case move.UP : {
                        moveShape(0, -move_length, circle);
                        console.log("Uciekam do gory");
                        break;
                    }
                    case move.DOWN : {
                        moveShape(0, move_length, circle);
                        console.log("Uciekam do dolu");
                        break;
                    }
                    case move.LEFT : {
                        moveShape(-move_length, 0, circle);
                        console.log("Uciekam w lewo");
                        break;
                    }
                    case move.RIGHT : {
                        moveShape(move_length, 0, circle);
                        console.log("Uciekam w prawo");
                        break;
                    }
                    default:
                        break;
                }
            }
        }
    });


//Chaser
var keyups = Rx.Observable.fromEvent(document, 'keydown');
keyups.throttleTime(100)
    .map(function (e) {
        return e.key;
    })
    .subscribe(
        function (key) {
            if (!completed) {
                var move_length = 50;
                switch (key) {
                    case move.ARROW_UP : {
                        moveShape(0, -move_length, rectangle);
                        console.log("Gonie do gory");
                        break;
                    }
                    case move.ARROW_DOWN : {
                        moveShape(0, move_length, rectangle);
                        console.log("Gonie w dol");
                        break;
                    }
                    case move.ARROW_LEFT : {
                        moveShape(-move_length, 0, rectangle);
                        console.log("Gonie w lewo");
                        break;
                    }
                    case move.ARROW_RIGHT : {
                        moveShape(move_length, 0, rectangle);
                        console.log("Gonie w prawo");
                        break;
                    }
                    default:
                        break;
                }
            }
        }
    );

//Watcher
Rx.Observable
    .timer(0, 10)
    .subscribe(function (x) {
        completed = circle.style.top === rectangle.style.top && circle.style.left === rectangle.style.left;
    });
