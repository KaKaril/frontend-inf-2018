// Najprostszy sposob uzyskania dziedziczenia
// Zamiast slówla kluczowego 'extends' w JAVA
function create(proto) {
    function F () {};
    F.prototype = proto;
    F.prototype.sayHello = function(){console.log("Hello");}
    return new F();
}

var base = {
   x: 5,
   y: 15,
   getX: function () {
     return this.x;
   },
   getY: function () {
     return  this.y;
   }
}

var someExtension = create(base);
someExtension.sayHello()
console.log(someExtension.getX());
