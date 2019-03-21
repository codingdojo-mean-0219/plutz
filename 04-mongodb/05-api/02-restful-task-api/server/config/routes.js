const tasks = require('../controllers/tasks');

module.exports= function(app){
    app.get('/tasks',tasks.index);
    app.post('/tasks',tasks.create);
    app.put('/tasks/:id',tasks.update);
    app.get('/tasks/:id',tasks.show);
    app.delete('/tasks/:id',tasks.delete);
};