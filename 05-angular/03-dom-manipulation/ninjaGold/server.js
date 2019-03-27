const express= require('express'),
      app=express(),
      body_parser=require('body-parser'); 

    app.use(body_parser.json());
    app.use(body_parser.urlencoded({extended:true}));
    app.use(express.static( __dirname + '/ninjaGold/dist/ninjaGold' ));
    require('./server/config/mongoose')();
    require('./server/config/routes')(app);

      var server=app.listen(8000,function(){
        console.log("listening on port 8000")
    })