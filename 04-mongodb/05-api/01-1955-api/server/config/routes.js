const users = require('../controllers/users');

module.exports= function(app){
    app.get('/',users.index);
    app.get('/new/:name',users.create);
    app.get('/remove/:name',users.delete);
    app.get('/:name',users.show);
};