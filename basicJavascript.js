<script>
    document.write("Ther current date and time is: ") ;
    var time = new Date();
    console.log(time)
</script>



var age = 26;  //declare number
var name = 'Surya'; //declare strings
var isMale = true;  //declare boolean

document.write(isMale);  //prints true

alert(name) //create a pop up with that variables value at the top of browser

var first = 'vivek';
var last = 'vishwakarma';

var full = first.concat(' ', last) //or first + ' ' + last;

console.log(full);  // vivek vishwakarma

console.log(full.toUpperCase());   //full.toLowerCase()

console.log(full.length);


// Javascript arrays
var myArray = ['car, 12, false'];
var age = myArray[1];
console.log(age);

console.log(myArray[4]); //undefined i.e out of range

myArray[4] = 'sheep';

console.log(myArray); //(5) ["cars", 12, false, empty, "cow"]
/*0:"cars",1: 12,2: false,4:"cow"
length: 5 */

var myArray = ['cars', 'bike'];
myArray.push('scooter');
myArray.unshift('train');
console.log(myArray);  //(4) ["train", "cars", "bike", "scooter"]

myArray.pop();  //'scooter'
myArray.shift();  //"train"
console.log(myArray);


//Javascript objects

var person = {
    name: 'Shrijan Sharma',
    age: 25,
    isMale: true,
    personality: ['patience', 'loyal', 'tall', 'handsome', 'yhappy'],
    company = {name: 'ACB',id: 12053 }

}

console.log(person.age);  //25
console.log(person['company'].id); //or console.log(person.company.id);  //12053

person.mail = 'shrijan.sharma@gmail.com';

person['status'] = 'good boy';


/* //control structure

==  equal to
=== equal to and of same type
!= not equal to
!=== not equal to and different type

|| logical OR
&& logical AND
! logical not
*/

console.log(5 > 'alligator')  //false ---> NaN - Not a Number


//functions

function factorial(n) {
    var product = 1;
    for(var i = 1;i<=n; i++) {
        product = product*i;
    }
    console.log(product);  //or return product;
}

var x = prompt("Please enter the nimber: ");
var f = factorial(x);
console.log(f);

var num = [2,3,4,5,6,7,8];

num.forEach(factorial)  // output [2, 6, 24, 120, 720, 5040, 40320]

function isEven(n) {
    return n%2 == 0;
}

num.every(isEven) //false


function square(n) {
    return n * n;
}

var squares = num.map(square);  // [4, 9, 16, 25, 36, 49, 64]


//functions as objects

var add = function(a,b) {
    return a + b;
}

console.log(add(4,8));


//functions can also be declared and used in objects

var johnDoe = {
    name: 'John Doe',
    age: 32,
    greeting: function(){
        return "Hello! Nice meeting you!";
    }
}

console.log(johnDoe.greeting());


//create a prototype

function Person(name, age) { //prototype
    this.name = name;
    this.age = age;
    this.greeting = function(){
        return "Hola! Buenos dias " + this.name;
    }
}

var johnDoe = new Person('John Doe', 32);
johnDoe.greeting();  //output-->"Hola! Buenos dias John Doe"


//extending a prototype

function Student(name, age, school){
    this.__proto__ = new Person(name, age);
    this.school = school;
}

var sarah = new Student('sara brown', 16, 'PennX');
sarah.greeting()

sarah instanceof Person;


//strings are immutable

var foo = 'turtle';
console.log(foo.toUpperCase());  //TURTLE
console.log(foo);   //turtle


var bar = 'cat'.concat('mouse');

var msg = "Programming in javascript is not having fun as in python";

msg.startsWith('pragramming');  //true
msg.startsWith('PROGRAMMING');  //false

msg.endsWith('is fun');   //true

var start = msg.search('is');   //26

msg.search('shit')  //-1

