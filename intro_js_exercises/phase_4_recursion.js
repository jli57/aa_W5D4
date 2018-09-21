function range(start, end){
  if (end - 1 === start){
    return [start];
  } else {
      return range(start, end - 1).concat([end]);  
  }
}

function sumRec(arr) {
  if (arr.length <= 1) {
    return arr[0];
  } else {
    return sumRec(arr.slice(1)) + arr[0]; 
  }
}

function exponent(base, exp) {
  if ( exp === 0 ) {
    return 1; 
  } else if ( exp > 0 ) {
    return base * exponent(base, exp-1); 
  } else if ( exp < 0 ) {
    return (1 / base) * (exponent(base, exp+1)); 
  }
}

function fibonacci(n) {
  if ( n <= 1 ) {
    return [1];
  } else if ( n === 2 ){
    return [1, 1]; 
  } else {
    let previous_list = fibonacci(n-1); 
    let l = previous_list.length-1; 
    return previous_list.concat( [ previous_list[l-1] + previous_list[l] ] ); 
  }
}

function deepDup(array) {
  return array.map((subArray)=>{
    if (Array.isArray(subArray)) {
      return deepDup(subArray);
    } else {
      return subArray;
    }
  });
}

function bsearch(arr, target) {
  if ( arr.length <= 1 ) {
    if ( arr[0] === target ) {
      return 0; 
    } else {
      return -1; 
    }
  } else {
    let mid = Math.floor(arr.length/2); 
    if ( arr[mid] === target ) {
      return mid; 
    } else if ( arr[mid] <= target ) {
      let right = arr.slice(mid+1); 
      let prev_ind = bsearch(right, target); 
      if ( prev_ind === -1 ) {
        return prev_ind; 
      } else {
        return mid + 1 + bsearch(right, target); 
      }
    } else {
      let left = arr.slice(0, mid); 
      return bsearch(left, target); 
    }
  }
}
