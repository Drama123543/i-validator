var reduce = require('./polyfill/reduce')
function _reduce(arr,fn,initialValue) {
  if(initialValue){
    return reduce.call(arr,fn,initialValue);
  }
  return reduce.call(arr,fn);
}

module.exports = _reduce;