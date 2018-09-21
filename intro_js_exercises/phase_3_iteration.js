Array.prototype.bubbleSort = function() {
  let sorted = false; 
  const origArray = this;
  
  while ( !sorted ) {
    sorted = true; 
    this.forEach( (e1, i1) => {
      this.forEach( (e2, i2) => {
        if ( i2 > i1 ) { 
          if ( e2 < e1 ) {
            [ this[i1], this[i2] ] = [ this[i2], this[i1] ]; 
            sorted = false; 
          }
        }
      }); 
    }); 
  }
  return origArray;  
}; 

String.prototype.substrings = function(){
  
};