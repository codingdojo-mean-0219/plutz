const Book= require('mongoose').model('Book');
const Author= require('mongoose').model('Author');
module.exports={
    create(req,res){
        Book.create(req.body,function(error,book){
            if (err){res.json(error);}
            else{
                Author.findOneAndUpdate({_id:req.params.id},{$push:{books:book}},function(error,data){
                    if (error){
                        console.log(error)
                    }
                    else{
                        res.json(data);
                    }
                })
            }
        })

    },
    delete(req,res){
        Book.remove({_id:req.params.id})
            .then(book=>res.json(book))
            .catch(error=>res.json(error));
    },
    all(req,res){
        Book.find({})
            .then(books=>res.json(books))
            .catch(error=>res.json(error));
    }
}