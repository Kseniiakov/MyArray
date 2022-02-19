"use strict";

// prototype obj
const arrayPrototype = {
  // Class.prototype.includes
  includes: function (arg) {
    for(let i = 0; i < this.length; i++) {
      if(this.array[i] === arg) {
        return true;
      };
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
  },

  pop: function() {
    for(let i = 0; i < 1; i++) {
      if(this.length > 0) {
        let last = this.array[this.length-1];
        delete this.array[this.length-1];
        this.length--;
        return last;
      };
    };
    return;
  },

  slice: function(begin = 0, end = this.length) {
    const newArr = new MyArray();
    if(begin >= 0 && begin < this.length) {
      if(end > 0) {
        for(let i = begin; i < end; i++) {
          newArr.push(this.array[i]);
        }
      }
      else if(end < 0) {
        for(let i = begin; i < (this.length + end); i++) {
          newArr.push(this.array[i]);
        }  
      }
    }
    else if(begin < 0) {
      for(let i = this.length + (begin); i < this.length; i++) {
        newArr.push(this.array[i]);
      }
    }
    return newArr;
  },

  concat: function(...value) {
    const concatArr = new MyArray();

    for(let i = 0; i < this.length; i++) {
      concatArr.push(this.array[i]);
    }
    debugger
    for(let i = 0; i < value.length; i++) {
      let valueArr = value[i];
      for(i = 0; i < valueArr.length; i++) {
        concatArr.push(valueArr.array[i]);
      }
    }
    return concatArr;
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

// test push
myArray.push(1,2,3);
myArray.push(4,5);
console.log(myArray);
// console.log(resultPush3);

// test pop
// const resultPop = myArray.pop();
// console.log(resultPop);
// const resultPop2 = myArray.pop();
// console.log(resultPop2);

// test indexOf
// const result = myArray.indexOf(10);
// console.log(result);

// test slice
// const myNewArray = myArray.slice(0,-3);
// console.log(myNewArray);

// test concat

const concatMyArray = new MyArray();
concatMyArray.push('1','2','3');

const concatMyArray3 = new MyArray();
concatMyArray3.push('a', 'b', 'c');

console.log(concatMyArray3);

const concatResult = myArray.concat(concatMyArray, concatMyArray3);

console.log(concatResult);