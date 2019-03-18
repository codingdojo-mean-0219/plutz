var otters= require('../controllers/otters.js');
module.exports=function(app){
    
//index route
app.get('/',function(req,res){
    otters.index(req,res);
})
//load new page
app.get('/new',function(req,res){
    otters.new(req,res);
});
//create route
app.post('/otters',function(req,res){
   otters.create(req,res);
})

//show route
app.get('/:id', function(req, res){
    otters.show(req,res);
  });

//route for edit page
app.get('/:id/edit',function(req,res){
    otters.edit(req,res);
});
//update route
app.post('/:id', function(req, res){
    otters.update(req,res);
  });
//delete
app.post('/:id/delete', function(req, res){
    otters.destroy(req,res)
  });

}