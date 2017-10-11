var each = require('./polyfill/each');

function _each(arr,fn) {
  each.call(arr,fn);
  return void 0;
}

module.exports = _each;