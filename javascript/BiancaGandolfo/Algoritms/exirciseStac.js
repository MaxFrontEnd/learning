var Stack = function() {
  this.capacity = 2;
  this.storage = "";
  this.count = 0;
};

// добавляем елемент в стэк
Stack.prototype.push = function(val) {
  if (!val) {
    console.log("Enter a value to add at stack");
    return "Nothing to push";
  }
  if (this.capacity > 0) {
    this.val = val + "/";
    this.storage = this.storage + this.val.toString();
    this.count = this.count + 1;
    this.capacity = this.capacity - 1;
    console.log("Element " + this.val + " has added to list");
  } else {
    console.log(
      "Maximum capasity is already reached. Remove one element before adding new one"
    );
  }
};

// Убираем крайний элемент из стэка
Stack.prototype.pop = function() {
  var i = 0;
  var str = "";

  while (i < this.storage.length && this.storage[i] != "/") {
    str = str + this.storage[i];
    i = i + 1;
  }

  if (this.storage) {
    this.storage = this.storage.slice(i + 1);
  }

  this.count = this.count - 1;
  this.capacity = this.capacity + 1;
  console.log("Element " + str + " removed from stack");
  return str;
};

Stack.prototype.pick = function pick() {
  var i = 0;
  var str = "";

  while (i < this.storage.length && this.storage[i] != "/") {
    str = str + this.storage[i];
    i = i + 1;
  }
  return str;
};
//Выводим размер стэка
Stack.prototype.size = function size() {
  var size = 0;
  for (let i = 0; i <= this.storage.length; i = i + 1) {
    if (this.storage[i] === "/") {
      size = size + 1;
    }
  }
  console.log(size);
};

// Выводим стэк
Stack.prototype.view = function view() {
  console.log(this.storage ? this.storage : "empty");
};

Stack.prototype.countElements = function countElements() {
  console.log("There are " + this.count + " elements in stack");
};

Stack.prototype.contains = function contains(str) {
  console.log(this.storage.includes(str));
};

var myStack = new Stack();
myStack.countElements();
myStack.push("First");
myStack.view();
myStack.push("Second");
myStack.view();
myStack.push("Third");
myStack.view();
myStack.pop();
myStack.view();
myStack.contains("bat");
myStack.contains("Second");
// myStack.push("");

// myStack.view();
// console.log(myStack.pick());
// myStack.view();
// myStack.countElements();
