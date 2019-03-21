
function asyncReturn(file, cb) {
    var files = { 
        "file1": "this is the first file",
        "file2": "this is the second file",
        "file3": "this is the third file"
    }
    console.log("reciving" + file);
    var randomDelay = Math.floor(Math.random() * 4 + 1) * 1000;
    console.log(randomDelay);
    setTimeout(function returnFile() {
        return cb(files[file]);
    }, randomDelay);
};

function displayFiles(file, text) {
    console.log(text);
};

// функция получения текска из файла

function getFileText(file) {
    //вызвать асинхронно
    asyncReturn(file, function(text) {
        displayFiles(file, text);
    });
    // вывести результат 
};


getFileText("file1");
getFileText("file2");
getFileText("file3");