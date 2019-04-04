//Implement lincked list

function Node(value) {
  this.value = value;
  this.next = null;
}
function CreateLinkedList(value) {
  if (value === undefined || value === null) {
    console.log("need a value for the firs node");
  }
  this.head = new Node(value);
  this.tail = value;
}

CreateLinkedList.prototype.forEach = function(callback) {
  this.position = this.head;
  do {
    callback(this.position.value);
    this.position = this.position.next;
  } while (this.position);
};

CreateLinkedList.prototype.insertAfter = function(value) {
  this.head.next = new Node(value);
};

CreateLinkedList.prototype.removeAfter = function(value) {
  this.head.next = new Node(value);
};

CreateLinkedList.prototype.print = function() {
  this.position = this.head;
  var printString = "";
  do {
    printString = printString + this.position.value + " | ";
    this.position = this.position.next;
  } while (this.position);
  console.log(printString);
};
var list = new CreateLinkedList("FIRST");
list.insertAfter("SECOND");
list.forEach(console.log);
list.print();
