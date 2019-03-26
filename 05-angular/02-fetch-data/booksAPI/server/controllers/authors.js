const Author= require('mongoose').model('Author');
const Book= require('mongoose').model('Book');

module.exports={
//all 
    all(req,res){
        Author.find({})
            .then(authors=>res.json(authors))
            .catch(error=>res.json(error));
    },
//show
    show(req,res){
        Author.find({_id:req.params.id})
            .then(author=>res.json(author))
            .catch(error=>res.json(error));
    },
//create
    create(req,res){
        Author.create(req.body)
            .then(author=>res.json(author))
            .catch(error=>res.json(error));
    },
    //delete
    delete(req,res){
        Author.remove({_id:req.params.id})
            .then(author=>res.json(author))
            .catch(error=>res.json(error));
    },
    //update
    update(req,res){
        Author.findByIdAndUpdate({_id:req.params.id},{$set:req.body})
            .then(author=>res.json(author))
            .catch(error=>res.json(error));
    },
    //add book
    addBook(req,res){
        Book.create(req.body,function(error,book){
            if (error){res.json(error);}
            else{
                Author.findOneAndUpdate({_id:req.params.id},{$push:{books:book}})
                    .then(author=>res.json(author))
                    .catch(error=>res.json(error));
            }
        })
    }
}




