class Node {
 constructor(value) {
  this.value = value;
  this.next = null;
 }
}

class LinkedList {
 constructor() {
  this.head = null;
  this.length = null;
 }
 insertFirst(value){
  const newNode = new Node(value);
  newNode.next = this.head;
  this.head = newNode;
  this.length++;
 }
 
 insertLast(value){
  const newNode = new Node(value);
  let current = this.head;
  let count = 0;
  while (current.next) {
   current = current.next;
   count++;
  }
  current.next = newNode;
  this.length++;
 }
 
 insertAt(value,index){
  if (index > this.length || index < 0) {
   return;
  }
  if (index === 0) {
   this.insertFirst(value);
  } else if (index === this.length) {
   this.insertLast(value);
  }else {
  
  const newNode = new Node(value);
  let current = this.head;
  let count = 0; 
   while (count < index-1) {
    current = current.next;
    count++;
   } 
   newNode.next = current.next;
   current.next = newNode;
   this.length++;
  }
 }
 
 getAt(index){
  let current = this.head;
  let count = 0;
  if (index === 0) {
   return current.value;
  } else {
   while (current) {
    if (count === index) {
     return current.value;
    }
    current = current.next;
    count++;
   }
  }
 }
 
 removeAt(index){
  if (index < 0 || index >= this.length) {
   let err = new Error('Out of bounds');
   return err;
  } else if (index === 0) {
   let removeItem = this.head;
   this.head = this.head.next;
   return removeItem;
  } else {
   let current = this.head;
   let previous;
   let count = 0;
   while (count < index-1) {
    current = current.next;
    count++;
   }
   previous = current;
   current = current.next;
   previous.next = current.next;
   this.length--;
  }
 }
 

 printList(){
  let current = this.head;
  let items = '';
  while (current) {
   items += current.value + ' ';
   current = current.next;
  }
  return items;
 }
 
 clear(){
  this.head = null;
  this.length = 0;
 }
 
}

const link = new LinkedList();
console.log(link);
link.insertFirst(100);
link.insertFirst(200);
link.insertLast(0);
link.insertLast(5);
link.insertAt('Head',0);
link.insertAt('Tail',5);
link.insertAt('inserted',2);
console.log(link.getAt(6));


console.log(link.printList());
link.removeAt(0);
console.log(link.printList());
link.clear();
console.log(link.printList());








