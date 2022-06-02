const numbers = [1,2,3,4,5,6];

/** forEach polyfill */

Array.prototype.ownForEach =  function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this); // current value, index, array
    }
}

/** map polyfill */

Array.prototype.ownMap = function(callback) {
  let newArr = [];
  
  for (let i = 0; i < this.length; i++) {
  	newArr.push(callback(this[i], i, this));
  }
  
  return newArr;
}