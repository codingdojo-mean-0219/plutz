const User= require('mongoose').model('User');

let farm = () => Math.round(Math.random()*(20-10)+10);
let cave= () => Math.round(Math.random()*(10-5)+5);
let house= () => Math.round(Math.random()*(5-2)+2);
let casino = () => Math.round(Math.random()*(100)-50)
module.exports={
    process(req,res){
        User.find({name:req.body.name})
            .then(user=>{
                if(req.body.building==='farm'){
                    let winnings=farm();
                    user[0].gold+=winnings;
                    user[0].log.push("You won "+winnings+" gold at the Farm!")
                    user[0].save()
                }
                if(req.body.building==='cave'){
                    let winnings=cave();
                    user[0].gold+=winnings;
                    user[0].log.push("You won "+winnings+" gold at the Cave!")
                    user[0].save()
                }
                if(req.body.building==='house'){
                    let winnings=house();
                    user[0].gold+=winnings;
                    user[0].log.push("You won "+winnings+" gold at the House!")
                    user[0].save()
                }
                if(req.body.building==='casino'){
                    let winnings=casino();
                    user[0].gold+=winnings;
                    if(winnings>0){
                        user[0].log.push("You won "+winnings+" gold at the Casino!")
                        user[0].save()
                    }
                    if(winnings<0){
                        user[0].log.push("You lost "+winnings+" gold at the Casino!")
                        user[0].save()
                    }
                    if(winnings===0){
                        user[0].log.push("You recieved "+winnings+" gold at the Casino!")
                        user[0].save()
                    }
                }
                res.json(user);
            })
            .catch(error=>res.json(error));
    },
    new(req,res){
        User.create(req.body)
            .then(user=>{
                console.log("Created", user);
                res.json(user);
            })
            .catch(error=>res.json(error));
    },
    populate(req,res){
        User.find({name:req.body.name})
        .then(user=>res.json(user))
        .catch(error=>res.json(error));
    }
}