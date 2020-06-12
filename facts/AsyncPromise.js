let fs=require("fs");
console.log("Before");
//2015
let readFilePromise=fs.promises.readFile("f1.txt");

readFilePromise.then(function(data){
    console.log("Inside Then");
    console.log("Conternt"+data);
})

readFilePromise.catch(function(err){
    console.log("Inside catch");
    console.log(err);
})
console.log("After");