"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = function () {
  function Shape(x, y) {
    _classCallCheck(this, Shape);

    this.x = x;
    this.y = y;
  }

  _createClass(Shape, [{
    key: "move",
    value: function move(delta) {
      this.x += delta;
      this.y += delta;
    }
  }, {
    key: "moveToZero",
    value: function moveToZero() {
      this.x = 0;
      this.y = 0;
    }
  }]);

  return Shape;
}();

var aShape = new Shape(2, 3);
aShape.move(4);
console.log(aShape.x);
aShape.moveToZero();
console.log(aShape.x);
