Array.prototype.myEach = function(callback) {
  let origArray = this;
  for ( let i = 0; i < origArray.length; i++)  {
    callback( origArray[i], i);
  }
};

Array.prototype.myMap = function(callback) {
  let origArray = this;
  let newArray = [];
  for ( let i = 0; i < origArray.length; i++)  {
    newArray.push(callback( origArray[i], i));
  }
  return newArray;
};

Array.prototype.myReduce = function(callback, acc) {
  if ( this.length == 0 ) { return []; } 
  let newArray = [];
  let iter = this;
  if (acc === undefined) {
    acc = this[0];
    iter = this.slice(1);
  }
  iter.myEach( (e) => {
    callback(acc, e); 
  }); 
  return acc; 
};