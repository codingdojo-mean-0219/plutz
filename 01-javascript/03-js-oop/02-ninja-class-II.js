function Ninja(name){

    this.name=name;
    this.health=100;

    var strength=3;
    var speed=3;
    
    this.sayName = function(){
        console.log("My name is: "+ this.name);
    };
    this.showStats = function(){
        console.log("health = "+this.health);
        console.log("strength = "+strength);
        console.log("speed = "+speed);
    }
    this.drinkSake= function(){
        this.health+= 10;
    }
    this.punch= function(ninja){
        if (ninja instanceof Ninja){
            ninja.health-=5;
            console.log(ninja.name +" punched by "+this.name);
            return this
        }
        else{
            return console.log("Cannot punch a non ninja");
        }
    }
    this.kick= function(ninja){
        if (ninja instanceof Ninja){
            var damage= strength*15;
            ninja.health-=damage;
            console.log(ninja.name +" kicked by "+this.name + " for "+damage + " damage");
            return this
        }
        else{
            return console.log("Cannot kick a non ninja");
        }
       
    }
}

var ninja1= new Ninja("Carl");
var ninja2=new Ninja("steve");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
ninja1.punch(ninja2)
ninja1.kick(ninja2);
ninja2.showStats();