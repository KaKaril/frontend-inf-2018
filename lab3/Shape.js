/*
* Obiektowość.
* Dziedziczenie.
*
*/

function Shape (x, y) {
  this.x = x;
  this.y = y;
}

 //Dziedziczenie metod
Shape.prototype.message = function () {
  console.log("Hello from message !");
};

Shape.prototype = {
    getX : function () {
      return this.x;
    },
    getY :function () {
      return this.y;
    }

};

Shape.prototype.move = function (deltaX,deltaY) {
   this.y += deltaY;
   this.x += deltaX;
};


var aShape = new Shape (2,1);
aShape.move(10,11);
console.log(aShape.getX() + " : " + aShape.getY());


function Circle (x,y,r){
   Shape.call(this, x, y);
   this.r = r;
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle;

Circle.prototype.area = function () {
      return Math.PI * this.r * this.r;
}

var circle = new Circle(1,2,3);
console.log(circle.area());

//console.log(aShape.x);
//console.log(aShape.toString());
//console.log(aShape.__proto__);
