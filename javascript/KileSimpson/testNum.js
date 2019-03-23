//Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.

function testNum(number) {
    return new Promise(function(resolve, reject) {
            setTimeout(function() {
                number >= 10
                ? resolve("the number " + number + " is greater or equal then 10")
                : reject(new Error("the number " + number + " is less then 10"));
            }, 2000);  
    });
}

var t10 = testNum(10);

// var t33 = testNum(33);

t10.then(function(fulfilled) {
    console.log(fulfilled);
}).catch(function(err) {
    console.log(err.message);
}).then(function(){
    var t1 = testNum(1);
    return t1;
}).then(function(fulfilled) {
    console.log(fulfilled);
}).catch(function(err) {
    console.log(err.message);
});

