Array.prototype.uniq = function() {
  const newArray = [];
  this.forEach(function(e) {
    if (newArray.indexOf(e) < 0) {
        newArray.push(e);
    }
  });
  return newArray;
};

Array.prototype.twoSum = function() {
  const newArray = [];
  this.forEach( (e, i) => {
    this.forEach( (e1, i1) => {
      if ( i1 > i ) {
        if ( e + e1 === 0 ) {
          newArray.push([i, i1]); 
        }
      }
    });
  });
  return newArray;
};

Array.prototype.transpose = function() {
  let newArray = new Array(this[0].length);
  newArray = newArray.map( (e) => new Array(this.length) );  
  this.forEach( (e, x) => {
    e.forEach( (e1, y) => {
      newArray[y][x] = e1; 
    }); 
  }); 
  return newArray; 
}; 
// Array.prototype.transpose = function() {
//   const newArray = [];
//   const origArray = this;
//   for ( let i = 0; i < this[0].length; i++ ) {
//     let subArray = [];
// 
//     origArray.forEach( (e) => {
//       subArray.push(e[i]);
//     });
//     newArray.push(subArray);  
//   }
// 
//   return newArray;
// }; 


// for ( let i = 0; i < arr.length; i++ ) { 
//   console.log(arr[i]); 
// }
// 

// new_matrix = []
// (0..arr.length).each_with_index do |el, i1|
//   (0..arr.length).each_with_index do |el1, i2|
//   new_matrix[i2][i1] = [e1]
