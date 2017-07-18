# Typescript  ES6
## Knowledge round-up
### Typescript
#### 1. What is TypeScript and Why do we need it?
- TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.TypeScript is a free and open-source programming language developed and maintained by Microsoft.
- Why do we need it? When us using TypeScript you can use the latest ES6 (and some ES2016/ES2017) features but not worry about browser or node version support, since TypeScript compiles to “standard JavaScript”. Even though today’s browsers support much of ES6, TypeScript levels the playing field, making sure the rendered JavaScript is 100% compatible across all platforms.
#### 2. How can you get TypeScript and install it?
There are two main ways to get the TypeScript tools:
- Via npm (the Node.js package manager)
- By installing TypeScript’s Visual Studio plugins

 For NPM users:
`npm install -g typescript`
#### 3. How do you compile TypeScript files?
We used a .ts extension, but this code is just JavaScript. You could have copy/pasted this straight out of an existing JavaScript app.
At the command line, run the TypeScript compiler:
`tsc <filename>.ts`
The result will be a file <filename>.js which contains the same JavaScript that you fed in.
####4. Which Object Oriented terms are supported by TypeScript? Write an example.
Object Oriented terms are supported by TypeScript are:
- Interface
- Class
- Inheritance
- Data Types
##### Example for Interface:
~~~java
interface Book
{
  bookname: string;
  price: number;
}

function info(book: Book) {
  return book.bookname + "costs " + book.price + "$";
}
var book= { bookname: "Dau truong sinh tu", price: "10" };
document.body.innerHTML = info(book);
~~~
##### Example for Class:
~~~java
class Car {
  name: string;
  color: string;
  constructor(name:string, color:string) {
    this.name = name;
    this.color = color;
  }
  showinfo() {
    return this.name + " has " + this.color;
  }
}
var car = new Car("Toyota","Sliver");
console.log(car.showinfo());
 ~~~
#### 5. How do you implement inheritance in TypeScript? Write an example.
We using keyword `extends` to implement inheritance in TypeScript.
#####Example:
~~~java
class Motor extends Car {
  wheel: number;
  constructor(wheel: number) {
  super();
  this.wheel = wheel;
  }
  showinfo() {
    return this.name + " has " + this.color + " and has " +this.wheel + "wheel";
  }
}
var motor = new Motor(2);
console.log(mortor.showinfo());
~~~
### ES6
#### 1. Block scope variable
~~~java
function calculateTotalAmount (vip) {
  const amount = 0  
  if (vip) {
    const amount = 1	 
  } 
  {
    const amount = 100 
    {
      const amount = 1000
    }
  }  
  return amount
}
~~~
#### 2. Template Literals
~~~java
var name = 'Nguyen Cong Duoc';
var team  = 'PHP';
var info = ` My fullname is ${name}.I am a ${team} Dev`;
console.log(info);
~~~
#### 3. Multi-line strings
~~~java
var info = `My hobbies are read a book, watch a film.
	 	I like animal.
	 	I am a member of PHP team.`
console.log(info);
~~~
#### 4. Arrow functions
~~~java
var logUpperCase = function() {
  this.string = this.string.toUpperCase()
  return () => console.log(this.string)
}
logUpperCase.call({ string: 'duoc nguyen c.' })()
~~~
#### 5. For...of
With the new for-of loop, ES6 aims to bring the best parts from all three of the previous approaches.
Example:
~~~java
var arr = [3, 5, 7];
for(i in arr) {
	console.log(i);	
}
//output: 0 1 2
var arr = [3, 5, 7];
for(i of arr) {
	console.log(i);	
}
//ouput: 3 5 7
~~~
#### 6. Default parameters
Default parameters allow us to initialize functions with default values. A default is used when an argument is either omitted or undefined; this means null is a valid value. A default parameter can be anything from a number to another function.
#####Example:
~~~java
function Book(name = 'Dau truong sinh tu', price = 10, url = https://vi.wikipedia.org/wiki/Đấu trường sinhtử") {
  return name + " costs " + price + "." + " More info: " + url;
}
console.log(`${Book()}`);
~~~