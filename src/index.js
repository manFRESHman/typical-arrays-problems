
exports.min = function min (array) {
  if(!array || !array.length){
    return 0;
  }
  let mn = array[0];
  for(el of array){
    if(el < mn){
      mn = el;
    }
  }
  return mn
}

exports.max = function max (array) {
  if(!array || !array.length){
    return 0;
  }
  let mx = array[0];
  for(el of array){
    if(el > mx){
      mx = el;
    }
  }
  return mx
}

exports.avg = function avg (array) {
  if(!array || !array.length){
    return 0;
  }
  let sm = 0;
  for(el of array){
    sm += el;
  }
  return sm / array.length;
}
