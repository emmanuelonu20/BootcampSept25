console.log('Hello to Nodejs'); //10 sec


let p = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Hello 2')
    }, 5000); //5 secs
});

p.then(function(data){
    //Promise was fulfilled
    console.log(data);
}).catch(function(err){
    //Promise not fulfilled
    console.log(err)
});

console.log('Hello 3');