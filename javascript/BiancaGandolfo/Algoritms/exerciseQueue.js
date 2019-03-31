var Queue = function() {
  this.count = 0;
  this.queue = {};
  this.next = 1;
  this.max = 3;
};

// Добавляет элемент к очереди
Queue.prototype.enqueue = function enqueue(item) {
  if (this.count <= 3) {
    this.queue[this.count + 1] = item;
    this.count = this.count + 1;
    console.log("Item " + item + " was added to queue");
  } else {
    console.log(
      " You are reached maxime capacity of this queue, plese remove elements before adding a new one"
    );
  }
};

// Enspect queue object
Queue.prototype.view = function view() {
  console.log(this.queue);
};

// Remove item from queue
Queue.prototype.dequeue = function dequeue() {
  if (this.count > 0) {
    delete this.queue[this.next];
    console.log("Item was removed from queue");
    this.next = this.next + 1;
    this.count = this.count - 1;
    this.max = this.max - 1;
  } else {
    console.log("Nothing to unqueue");
  }
};

//Следующий кто будет извлечен из очереди
Queue.prototype.pick = function pick() {
  this.count > 0
    ? console.log("Next to leave queue is " + this.queue[this.next])
    : console.log("empty queue");
};

// Количество элементов в очереди
Queue.prototype.countElements = function countElements() {
  console.log("There are " + this.count + " elements in this queue");
};

Queue.prototype.fidnItem = function fidnItem(item) {
  var arrObj = Object.values(this.queue);
  console.log(arrObj);
  for (let i = 0; i < arrObj.length; i = i + 1) {
    if (item === arrObj[i]) {
      console.log("item " + item + " was found");
      return true;
    }
  }
  return false;
};

var myQueue = new Queue();

myQueue.enqueue("Vincent Van Gog");
myQueue.enqueue("Michele Angelo");
myQueue.enqueue("Rembrand");
console.log(myQueue.fidnItem("Rembrand"));
myQueue.pick();
myQueue.view();
myQueue.dequeue();
myQueue.countElements();
myQueue.dequeue();
myQueue.pick();
myQueue.view();

// myQueue.countElements();
// myQueue.enqueue("Donatello");
// myQueue.enqueue("Raffael");
// myQueue.enqueue("Ivasovsky");
// myQueue.countElements();
// myQueue.enqueue("Salvador Dali");
