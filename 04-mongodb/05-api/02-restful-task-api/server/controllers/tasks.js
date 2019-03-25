const Task= require('mongoose').model('Task');

module.exports={
    //index
    index(req,res){
        Task.find({})
            .then(tasks=>res.json(tasks))
            .catch(error=>res.json(error));
    },

    //show
    show(req,res){
        Task.findOne(req.params)
            .then(task=>{
                res.json(task ? task:"No record of task")
            .catch(error=>res.json(error))
            });
    },
    //delete
    delete(req,res){
        Task.remove(req.params)
            .then(task=>res.json(task))
            .catch(error=>res.json(error))
    },

    //update
    update(req,res){
        Task.findByIdAndUpdate({task:req.body.id},{$set:req.body})
            .then(task=>res.json(task))
            .catch(error=>res.json(error));
    },

    //create
    create(req,res){
        Task.create(req.body)
            .then(person=>res.json(person))
            .catch(error=>res.json(error));
    }
}