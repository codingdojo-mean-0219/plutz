class Bike{
    price: number;
    max_speed: number;
    miles:number;
    constructor(price, max_speed) {
        this.price=price;
        this.max_speed=max_speed;
        this.miles=0;
    }
    displayInfo() {
        console.log("Price: " + this.price);
        console.log("Max Speed: " + this.max_speed+"MPH");
        console.log("Miles: " + this.miles);
    }
    ride = () => {
        console.log("Riding")
        this.miles = this.miles + 10;
        return this;
    }
    reverse = () => {
        if (this.miles > 5){
            console.log("Reversing");
            this.miles = this.miles - 5;
        }
        else {
            console.log("The bike can't reverse anymore!")
            this.miles = 0;
        }
        return this;
    }
}

const bike1 = new Bike(300, 28);
const bike2 = new Bike(250, 30);
const bike3 = new Bike(70, 10);

bike1.ride().ride().ride().reverse().ride().displayInfo()

bike2.ride().ride().ride().ride().ride().reverse().ride().displayInfo()

bike3.displayInfo()