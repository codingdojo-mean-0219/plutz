const Person= require('mongoose').model('Person');

module.exports={
//show
show(req,res){
    Person.findOne(req.params)
        .then(person=>{
            res.json(person ? person:"No records of a matching person")
            .catch(error=>res.json(error));
        })
},
//new
create(req,res){
    Person.create(req.params)
        .then(person =>  res.json(person))
        .catch(error=>res.json(error));
},
//delete
delete(req,res) {
    Person.remove(request.params)
        .then(person=>res.json(person))
        .catch(error=>res.json(error));
},
//index
index(req,res){
    Person.find({})
    .then(people => res.json(people))
    .catch(error => res.json(error));
}
}