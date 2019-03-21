// Получить aсинхронно имя и вывести его на экран

var Person = {
    name: "Max",
    surname: "Sam"
}

var getName = new Promise(function(resolve) {
    setTimeout(function() {
        resolve(Person.name)}, 2000);
})

getName.then(function(returnedData) {
    console.log(returnedData);
})