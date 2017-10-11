require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var _argumentstoArray = function(args) {
  var length = args.length,
      results = Array(length);
   for (var index = 0; index < length; index++) {
      results[index] = args[index]
    }
    return results;
}

module.exports = _argumentstoArray
},{}],2:[function(require,module,exports){
function _arrPush(arr,item) {
  arr.push(item)
  return arr
}

module.exports = _arrPush
},{}],3:[function(require,module,exports){
var each = require('./polyfill/each');

function _each(arr,fn) {
  each.call(arr,fn);
  return void 0;
}

module.exports = _each;
},{"./polyfill/each":7}],4:[function(require,module,exports){
function _isString(v) {
  return Object.prototype.toString.call(v) === '[object String]'
}

module.exports = _isString
},{}],5:[function(require,module,exports){
var map = require('./polyfill/map');

function _map(arr,fn) {
  return map.call(arr,fn);
}

module.exports = _map;
},{"./polyfill/map":8}],6:[function(require,module,exports){
var reduce = require('./polyfill/reduce')
function _reduce(arr,fn,initialValue) {
  if(initialValue){
    return reduce.call(arr,fn,initialValue);
  }
  return reduce.call(arr,fn);
}

module.exports = _reduce;
},{"./polyfill/reduce":9}],7:[function(require,module,exports){
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback/*, thisArg*/) {

    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception. 
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat while k < len.
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator.
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c.
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined.
  };
}

module.exports = Array.prototype.forEach;



},{}],8:[function(require,module,exports){
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

  Array.prototype.map = function(callback/*, thisArg*/) {

    var T, A, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this| 
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal 
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let A be a new array created as if by the expression new Array(len) 
    //    where Array is the standard built-in constructor with that name and 
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal 
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal 
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal 
        //     method of callback with T as the this value and argument 
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}

module.exports = Array.prototype.map;
},{}],9:[function(require,module,exports){
// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, 'reduce', {
    value: function(callback /*, initialValue*/) {
      if (this === null) {
        throw new TypeError( 'Array.prototype.reduce ' + 
          'called on null or undefined' );
      }
      if (typeof callback !== 'function') {
        throw new TypeError( callback +
          ' is not a function');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0; 

      // Steps 3, 4, 5, 6, 7      
      var k = 0; 
      var value;

      if (arguments.length >= 2) {
        value = arguments[1];
      } else {
        while (k < len && !(k in o)) {
          k++; 
        }

        // 3. If len is 0 and initialValue is not present,
        //    throw a TypeError exception.
        if (k >= len) {
          throw new TypeError( 'Reduce of empty array ' +
            'with no initial value' );
        }
        value = o[k++];
      }

      // 8. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kPresent be ? HasProperty(O, Pk).
        // c. If kPresent is true, then
        //    i.  Let kValue be ? Get(O, Pk).
        //    ii. Let accumulator be ? Call(
        //          callbackfn, undefined,
        //          « accumulator, kValue, k, O »).
        if (k in o) {
          value = callback(value, o[k], k, o);
        }

        // d. Increase k by 1.      
        k++;
      }

      // 9. Return accumulator.
      return value;
    }
  });
}

module.exports = Array.prototype.reduce;

},{}],"i-validator":[function(require,module,exports){
var _map = require('./util/_map'),
    _reduce = require('./util/_reduce'),
    _each = require('./util/_each'),
    _isString = require('./util/_isString'),
    _argumentstoArray = require('./util/_argumentstoArray'),
    _arrPush = require('./util/_arrPush');

function validator(message, fun){
  var f= function(){
    return fun.apply(fun, arguments);
  };
  f['message'] = message;
  return f;
}

function checker(){
  var validators = _argumentstoArray(arguments);
  return function(obj){
    return _reduce(validators, function(errs, check){
      if(check(obj)){
        return errs;
      }else{
        return _arrPush(errs, check.message)
      }
    },[])
  }
}


function iValidator(validatorArr) {
  var results = []
  _each(validatorArr,function(item) {
    var itemValue = item[0]["value"]
    var itemKey = item[0]["key"]
    var itemArr = item.slice(1)
    var itemvalidator=[]

    _each(itemArr,function(item) {
      var validatorFn = item["validatorFn"]
      var errorMessage = item["errorMessage"]

      if(!_isString(errorMessage) || errorMessage.length===0){
        throw Error("errorMessage of the validatorFn '" + item["validatorFn"] + "' should not an empty string")
      }
      itemvalidator.push( validator(item["errorMessage"],validatorFn) )
    })

    var result = checker.apply(null,itemvalidator)(itemValue)
    if( result.length !== 0 ){
      results.push({
        key:itemKey,
        errormessageArr:result
      })
    }
  })
  if( results.length !== 0 ) return results;
  return void 0
}


iValidator.checker = checker
iValidator.validator = validator
module.exports = iValidator


},{"./util/_argumentstoArray":1,"./util/_arrPush":2,"./util/_each":3,"./util/_isString":4,"./util/_map":5,"./util/_reduce":6}]},{},[]);
