
//1-//var hello; 
console.log(hello);//log undefined                                   
   var hello = 'world';//set hello=world                                  

//undefined

//2- var needle = 'haystack';//needle=haystack
test();
function test(){
	var needle = 'magnet';//needle=magnet
	console.log(needle); //log magnet
}

//"magnet"

//3- 
var brendan = 'super cool';//brendan=supercool
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan); //log super cool

//'super cool'

//4- 
var food = 'chicken'; //food gets chicken
console.log(food);   //log chicken
eat(); 
function eat(){
	food = 'half-chicken';//food gets half chicken
	console.log(food);//log half chicken
	var food = 'gone';//food gets gone
}
//'chicken'
//'half-chicken'
//5-- 
//var mean
mean(); // undefined, not a function
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

///typeerror mean not function

//6-//var genre 
console.log(genre); // log undefined
var genre = "disco";// genre=disco
rewind();
function rewind() {
	genre = "rock"; 
	console.log(genre);//log rock
	var genre = "r&b";
	console.log(genre);//log r&b
}
console.log(genre);//log disco

//undefined
//'rock'
//'r&b'
//'disco'

//7-
dojo = "san jose";
console.log(dojo); //log san jose
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo); //log seattle
	var dojo = "burbank"; 
	console.log(dojo);//log burbank
}
console.log(dojo); //log san jose

//'san jose'
////'seattle'
///'burbank'
///'san jose'

//8- 
console.log(makeDojo("Chicago", 65)); // return object{ dojo.name = Chicago, dojo.students= 65, dojo.hiring = True}
console.log(makeDojo("Berkeley", 0)); // tries to override constant variable, result Error
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}

//'name: Chicago, students: 65, hiring: True'
//error assigning to constant variable