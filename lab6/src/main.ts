//console.log("Hello")
interface Person {
  name :string;
}

function sayHello(person : Person){
  console.log(`Hello ${person.name}`);
}

let zz  = {name : "dddd"};
sayHello(zz);

class Student {
    constructor(public name :string, public yob: number){
      this.name = name;
      this.yob = yob;
    }
}

let student = new Student("studencik", 555);
sayHello(student);

enum Color {Red, Green, Blue}

console.log(Color.Red)

let sth : any = 4;
sth = "asd";
sth = false;
console.log(sth);
