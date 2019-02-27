function ninjaConstructor(name){
    var ninja={};

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
}

var ninja1= new ninjaConstructor("Carl");

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();