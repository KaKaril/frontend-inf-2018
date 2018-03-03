// OBJEKTY ale bez class -.-
/* console.log("hello worlds!");
var person = {
  'imie': 'pszemek',
  nazwisko: 'Pszemkowski',
  rokUr: 1445
};
console.log(person.imie);
person.miasto = "Tuchola";
console.log(person.miasto);
console.log(person['rokUr']); */

//TABLICE
/* var someArray = [1,2,"tszy"];
someArray.push('sztery');
console.log(someArray);
// mozna rozszerzac *.*
someArray.miasto = "CZENSTOHOWA"
// ale bezsensu
console.log(someArray); */

/* console.log(typeof new Number(3)); // object
console.log(typeof 5); //  number
console.log(typeof new Boolean(true)); //object
console.log(typeof true); //boolena
console.log(typeof NaN); //number xD
console.log(typeof null); // object */

// FUNCTION ORIENTED
/*  Funkcja jako :
  -zmienna - instrukcja przypisania
  console.log(add(1,'asdf')); tu nie zadzaiala */
 var add = function(a,b){
   return a + b;
 };
 console.log(add(1,'asdf'));
 console.log(add(1,'asdf', 123));
 console.log(typeof add);

/* - funkcja, przypisanie
 Mechanizm js ktory deklaracje (nie przypisania)
 f-cji wynosi na gore - HOISTING
 Dlatego add nie mozna wywolac przed przypisaniem. */
console.log(multiply(1,51));
function multiply(a,b){
  return a * a;
}
console.log(typeof multiply);

/*
Funkcja jako argument innej fukcji. HIGHER ORDER
Sort, Callbacki, promise'y.
*/
var higherOrderfunction = function(a,b){
  return a(b) + b;
}
console.log(higherOrderfunction(multiply, 7));

/*
Funkcja jako wartosc zwracana.
A na co to komu ?? -> Sposob na ukrywanie implementacji,
brak dojscia z kodu do zmiennej i z zewnatrz.
Jezyk tworzy DOMKNIĘCIE (zapamietuje zmienne wystepujace w jej kontekscie) - CLOSURE.
Proptoplasta class, prywatne metody, zmienne itd.


Kontekst funckyjny wewnatrz i w dol
*/

var counter = function(){
  // GLOBAL SCOPE bez var !!! Zaśmiecanie fuuu
  var i = 0;

  // funckja prywatna brak dostepu z zewnatrz.
  function incr(){
    return i +=1;
  }
  return function () {
      return incr();
  };
};
// }(); // Immediately executed function // IEF
//counter();
//counter();
//counter();
//console.log(counter());

var c = counter(); // funkcja zwrocila inna funkcje
var d = counter();
    console.log(typeof c); //func
    c();c();c();
    console.log(c());
    console.log(d());
//////////////////////////////////////////////
