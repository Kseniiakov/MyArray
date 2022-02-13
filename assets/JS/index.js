"use strict";

// prototype obj
const arrayPrototype = {
  // Class.prototype.includes
  includes: function (arg) {
    for(let i = 0;i < this.length;i++) {
      if(this.array[i] === arg) {
        return true;
      }
    };
    return false;
  },
  indexOf: function() {

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
const myarray = new MyArray();