class Card{
    constructor(suit,value){
        this.suit=suit;
        this.value=value;
    }
    show(){
        console.log (this.value + " of "+ this.suit);
    }

}

class Deck{
    constructor(){
        this.deck=[];
        const suits=['hearts','spades','clubs','diamonds'];
        const values=['ace',2,3,4,5,6,7,8,9,10,'jack','queen','king'];

        for (let suit in suits){
            for (let value in values){
                this.deck.push(new Card(suits[suit],values[value]));
            }
        }
        
    }
    show(){
            console.log(this.deck);
        }
    shuffle(){
        const deck=this.deck;
        let m = deck.length, i;
        while (m){
            i=Math.floor(Math.random() *m--);
            [deck[m],deck[i]]= [deck[i],deck[m]];

        }
        return this;
    }
    deal(){
        return this.deck.pop();
    }
}

class Player{
    constructor(name,deck){
        this.name=name;
        this.hand=[];

        for (let i=0;i<7;i++){
            this.hand.push(deck.deal());
        }
    }
    discard(value,suit){
        var removeIndex=this.hand.map(function(item){return item.suit}).indexOf(value);
        this.hand.splice(removeIndex,1);
    }
    deal(deck){
        this.hand.push(deck.deal());
    }


}
const deck1=new Deck();
deck1.shuffle();
const player1= new Player("steve",deck1)


console.log(player1.hand);
player1.deal(deck1);
console.log(player1.hand);