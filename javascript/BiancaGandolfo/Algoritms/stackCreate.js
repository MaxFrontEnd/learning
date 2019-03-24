var Stack = function() {
    this.storage = "";
}

Stack.prototype.push = function(val) {
    this.val  = val + '/';
    this.storage = this.storage + this.val.toString();
}

Stack.prototype.pop = function() {
    var i = 0;
    var str = ""
    while(this.storage[i] != '/') {
        str = str + this.storage[i];
        i = i + 1;
    }
    this.storage = this.storage.slice(i + 1);
    return str;
    
 
}

Stack.prototype.size = function() {
    var size = 0;
    for(let i=0; i <= this.storage.length; i = i + 1) {
        if(this.storage[i] === '/') {
            size = size + 1;
        }
    }
    console.log(size);
}

Stack.prototype.view = function() {
    console.log(this.storage);
}



varMyWeeklyMenu.push("ReadBeens");
varMyWeeklyMenu.push("Soup");
varMyWeeklyMenu.size();
varMyWeeklyMenu.view();
console.log(varMyWeeklyMenu.pop());
varMyWeeklyMenu.view();
console.log(varMyWeeklyMenu.pop());
varMyWeeklyMenu.view();
varMyWeeklyMenu.push("Soup");
varMyWeeklyMenu.view();