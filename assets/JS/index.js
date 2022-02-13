"use strict";

// prototype obj
const arrayPrototype = {
  // Class.prototype.includes
  includes: function (arg) {
    for(let i = 0; i < this.length; i++) {
      if(this.array[i] === arg) {
        return true;
      }
    };
    return false;
  },

  indexOf: function(arg) {
    for(let i = 0; i < this.length; i++) {
      if(this.array[i] === arg) {
        return i;
      };
    };
    return -1;
  },

  push: function(...elem) {
    for(let i = 0; i < elem.length; i++) {
      this.array[this.length] = elem[i];
      this.length++;
    };
    return this.length;
  }
};

// constructor func
function MyArray() {
  this.array = {};
  this.length = 0;
};

// bind prototype obj (Class.prototype)
MyArray.prototype = Object.assign(MyArray.prototype, arrayPrototype);

// static method (Class.method)
MyArray.isMyArray = function(arg) {
  if (arg instanceof MyArray) {
    return true;
  };
  return false;
};

// create instance
const myArray = new MyArray();

// push
const resultPush = myArray.push(1,2,3);
const resultPush2 = myArray.push('4',5,6);
const resultPush3 = myArray.push('7',8,9,10);
console.log(myArray);
// console.log(resultPush3);

// test indexOf
const result = myArray.indexOf(11);
console.log(result);