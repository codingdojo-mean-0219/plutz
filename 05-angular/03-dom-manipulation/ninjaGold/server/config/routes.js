const users = require('../controllers/users');


module.exports=function(app){
    app.post('/process',users.process);
    app.post('/new',users.new);
    app.post('/user',users.populate);
}