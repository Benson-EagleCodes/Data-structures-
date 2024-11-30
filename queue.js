class Queue {
 constructor() {
  this.queue = [];
  this.count = 0;
  this.front = 0;
 }
 enqueue(value){
  this.queue[this.count] = value;
  this.count++;
 }
 
 dequeue(){
  if (this.isEmpty()) {
   return undefined;
  }
  let firstEl = this.queue[this.front];
  for (let i = this.front; i < this.count - 1; i++) {
   this.queue[i] = this.queue[i + 1];
  }
  this.count--;
  this.queue.length = this.count;
  return firstEl;
 } 
 
 isEmpty(){
  return this.count === 0;
 }
 peek(){
  return console.log(this.queue[this.front]);
 }
 length(){
  return console.log(this.count);
 }
 clear(){
  this.queue = [];
  this.count = 0;
 }
}

const queue = new Queue();
queue.enqueue('Hello');
queue.enqueue('World');
queue.enqueue('Js');
queue.enqueue('React');
queue.dequeue();
queue.peek();
queue.length();

console.log(queue);