var Queue = function() {
  this.count = 0;
  this.queue = {};
  this.next = 1;
};

// Добавляет элемент к очереди
Queue.prototype.enqueue = function enqueue(item) {
  this.queue[this.count + 1] = item;
  this.count = this.count + 1;
  console.log("Item was added to queue");
  console.log(this.count);
};

// Enspect queue object
Queue.prototype.view = function view() {
  console.log(this.queue);
};

// Remove item from queue
Queue.prototype.dequeue = function dequeue() {
  delete this.queue[this.next];
  console.log("Item was removed from queue");
  this.next = this.next + 1;
};
var myQueue = new Queue();

myQueue.enqueue("Vincent Van Gog");
myQueue.enqueue("Michele Angelo");
myQueue.view();
myQueue.dequeue();
myQueue.view();
