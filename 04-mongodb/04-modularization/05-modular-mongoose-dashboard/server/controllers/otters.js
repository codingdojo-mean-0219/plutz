const mongoose=require("mongoose");

const Otter=mongoose.model("Otter");


module.exports={
    index: function(req,res){
        Otter.find({},function(err,results){
            if (err){console.log(err);}
            res.render('index',{otters:results});
        })
    },
    create: function(req,res){
        Otter.create(req.body,function(err,result){
            if (err){console.log(err)};
            res.redirect('/')
        })
    },
    update: function(req,res){
        Otter.update({ _id: req.params.id }, req.body, function(err, result){
            if (err) { console.log(err); }
            res.redirect('/');
          });
    },
    show: function(req,res){
        Otter.find({ _id: req.params.id }, function(err, results) {
            if (err) { console.log(err); }
            res.render('show', { otter: results[0] });
          });
    },
    destroy: function(req,res){
        Otter.remove({ _id: req.params.id }, function(err, result){
            if (err) { console.log(err); }
            res.redirect('/');
          });
    },
    new: function(req,res){
        res.render('new');
    },
    edit: function(req,res){
        Otter.find({_id:req.params.id},function(err,results){
            if (err){console.log(err);}
            res.render('edit',{otter:results[0]});
        });
    }

}