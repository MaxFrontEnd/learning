// Получить aсинхронно имя и вывести его на экран

var Person = {
    name: "Max",
    surname: "Sam"
}

var getName = new Promise(function(resolve) {
    var name = Person.name.toLocaleUpperCase();
    setTimeout(function() {
        resolve(name)}, 2000);
})

getName.then(printData, result) {
   returnedData;
};

var printData = function(data) {
    console.log(data);
}
