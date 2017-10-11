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

