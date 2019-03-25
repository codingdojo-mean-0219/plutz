var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
var myNumber:number;
//myString has been declared as a string type, so assigning a number to it will not work, either remove the string declaration or assign a new variable
// with type number
myNumber= 9;

function sayHello(name){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 // The code expects a string to be passed as the parameter to the function sayHello, if we want it to say hello 9 we need to remove
 // that string requirement
 console.log(sayHello(9));
 
 function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 // make middleName an optional parameter
 console.log(fullName("Jimbo", "Jones"));

 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 // The variable name for jay was "belt" instead of "belts" fixing that solved the problem
 console.log(graduate(jay));

 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 // Ninja is not a function, remove the parenthesis
 const shane = Ninja;
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:

 function study(programmer){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 // turing is not of type Ninja, so we need to remove that requirement from the function declaration
 console.log(study(turing));

var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x * x;
//remove curly brackets to make it return x*x
// This is not showing me what I want:
console.log(square(4));
// This is not working:
// place x,y in parenthesis to use them as parameters
var multiply = (x,y) => x * y;
// Nor is this working:
//it is returning the sum statement, we need it to return all variables so we can call it
// making an anonomous function is the easiest way
var math = function(x, y){
   let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];
}

class Elephant {
    constructor(public age: number){}
    birthday = function(){
       this.age++;
     }
     //just return the updated age
     update = () => this.age;
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function () {
     //call the new age after the birthday function
    console.log(`Babar's age is ${babar.update()}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
 
 