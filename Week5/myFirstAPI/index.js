//Create our web server
const express = require('express'); //importing the express package
const app = express(); //web application

app.use(myGlobalMiddleware);

function myGlobalMiddleware(req, res, next){
    //res.send('Blocked by middleware');
    next(); //forward request to target route
}

function myLocalMiddleware(req, res, next){
    res.send('This is a blocked local middleware');
}

//Route
app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/students/:student_id', myLocalMiddleware, function(req, res){
    const studentId = req.params.student_id;
    const department = req.query.department;
    res.send('This is my students data: ' + studentId + department);
});

//Make our server
app.listen(3000, function(){
    console.log('Server running on port 3000...');
});