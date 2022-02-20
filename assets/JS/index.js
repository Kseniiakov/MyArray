"use strict";
// ==============
// посмотреть pop
// ==============

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
    if(this.length > 0) {
      let last = this.array[this.length-1];
      delete this.array[this.length-1];
      this.length--;
      return last;
    };
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

    for(let i = 0; i < value.length; i++) {
      let valueArr = value[i];
      if(MyArray.isMyArray(valueArr)) {
        for(let j = 0; j < valueArr.length; j++) {
          concatArr.push(valueArr.array[j]);
        }
      }
      else {
        concatArr.push(valueArr);
      }
    }
    return concatArr;
  },

  unshift: function(...elem) {
    for(let i = elem.length; i > 0; i--) {
      this.array[this.length] = 0;
      this.length++;

      for(let j = 1; j < this.length; j++) {
        this.array[this.length-j] = this.array[this.length-(j+1)]
      }
      this.array[0] = elem[i-1];
    };
    return this.length;
  },

  shift: function() {
    if(this.length > 0) {
      const first = this.array[0];
      for(let i = 0; i < this.length; i++) {
        this.array[i] = this.array[i+1];
      }
      delete this.array[this.length-1];
      this.length--
      return first;
    };
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

// ----------------------- test push --------------------------------------------

myArray.push(1,2,3);
myArray.push(4,5,6);
console.log(myArray);
// console.log(resultPush3);

// ------------------------ test pop --------------------------------------------

// const resultPop = myArray.pop();
// console.log(resultPop);
// const resultPop2 = myArray.pop();
// console.log(resultPop2);

// ------------------------------------------------------------------------------
// test indexOf
// const result = myArray.indexOf(10);
// console.log(result);

// ------------------------------------------------------------------------------
// test slice
// const myNewArray = myArray.slice(0,-3);
// console.log(myNewArray);

// ------------------------------------------------------------------------------
// test concat
// const concatMyArray = new MyArray();
// concatMyArray.push('1','2','3');

// const concatMyArray3 = new MyArray();
// concatMyArray3.push('a', 'b', 'c');

// const concatMyArray4 = new MyArray();
// concatMyArray4.push(20,30,40,50,60,70);

// const concatResult = myArray.concat(concatMyArray, concatMyArray3, concatMyArray4, 100, 'my name');

// console.log(concatResult);

// ------------------------------------------------------------------------------
// test unshift
// const result = myArray.unshift(100,200,300);
// console.log(result);

// ------------------------------------------------------------------------------
// test shift
// const result = myArray.shift();
// console.log(result);
