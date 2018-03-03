// Cztery konteksty wywolania f-cji
// 1. Jako f-cja (zwykły kontekst)
// Wiąże do globala.

function z(){
  //console.log(this.imie);
}
imie = "pszemek"
z();

// 2. Konstruktor "troszeczke skopane".
//   KONWENCJA : KONSTRUKTOR Z WIELKIEJ LITERY
function Person(name){
  this.name = name;
}

var persona_non_grada1 = new Person("pszemek"); // Wywolanie f-cji w kontekscie konstruktora. new + this dziala jak chcemy.
var persona_non_grada2 = Person("przerek"); // Jest problem. Wiąże do globala.
console.log(persona_non_grada1.name);
// console.log(persona_non_grada2.name);


// 3. Metoda
var person = {
  imie: "nieznane",
  sayHello: function(){
    return "Hello " + this.imie;
  }
}
person.imie = "pszemek"

console.log(person.sayHello());

// 4. Apply - this powiaze obiekty, ktore przekazemy
function dajGlos(zwierze) {
  return "jestę "  + zwierze + " i robie " + this.message
}

var kaczka = {
  message: "KAWA KAWA"
};

var pies = {
  message: "HAŁ HAŁ"
}
console.log(dajGlos.apply(kaczka, ['kaczka']));
console.log(dajGlos.apply(pies, ['pies']));
