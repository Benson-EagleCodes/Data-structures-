class Stack {
 //#stack;
 //#length;
 constructor() {
  this.stack = [];
  this.length = 0;
 } 
 
 push(value){
  this.stack[this.length] = value;
  this.length++;
  
 }
 
 pop(){
  if (this.isEmpty()) {
   return 'Unstack Uderflow';
  };
  let topValue = this.stack[this.length - 1];
  this.stack.length = this.length -1;
  this.length--;
  return topValue;
 }
 peek(){
  if (this.isEmpty()) {
   return console.log('No data');
  }
  return console.log(this.stack[this.length - 1]);
 }
 isEmpty(){
  this.length === 0 ? console.log('Empty'): console.log('Not empty');
 }
 stackLength(){
  return console.log(this.length);
 }
 clear(){
  this.stack = [];
  this.length = 0;
  console.log('Stack cleared');
 }
}

const stack = new Stack();
stack.push('first-value');
stack.push('second-value');
stack.push('third-value');
stack.push('fourth-value');
console.log(stack);

// stack.pop();
stack.isEmpty();
stack.stackLength();
stack.peek();
stack.clear();
console.log(stack)
stack.push('New value 1');