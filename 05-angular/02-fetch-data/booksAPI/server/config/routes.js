var authors = require('../controllers/authors.js');
var books = require('../controllers/books');

module.exports=function(app){
    app.get('/authors',
        authors.all
    );
    app.get('/authors/:id',
        authors.show
    );

    app.post('/authors',
        authors.create
    );
    app.put('/authors/:id',
        authors.update
    );
    app.delete('/authors/:id',
        authors.delete
    );
    app.post('/authors/:id',
        authors.addBook
    );

    app.delete('/book/:id',
        books.delete
    );
    app.get('/books',
        books.all
    );



};