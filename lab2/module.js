var lib = {};

lib.module = (function(){
  var c = 0;
  var priv2 = "Hello";

  var myInterface = {
    message: priv2 + "worlds!",
    // metoda
    counter: function() {
        return ++c;
    },
    // metoda
    sayHello: function(name){
      return "hello " + name;
    }
  };

  return myInterface;
})();

console.log(lib.module.sayHello("piotrek"));
console.log(lib.module.counter());
console.log(lib.module.counter());
