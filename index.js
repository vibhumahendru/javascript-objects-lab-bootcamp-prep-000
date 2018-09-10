var recipes = new Object({key:'value'})

function updateObjectWithKeyAndValue(object, key, value){
return Object.assign({}, object, { [key]: value })
  
}

<<<<<<< HEAD
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key] = value
   return object
}

function deleteFromObjectByKey(object, key){
var obj = object
var newObj = Object.assign({}, [obj])
delete newObj.key
return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  
  delete object[key]
  return object
}
=======
>>>>>>> 6344aba6e57bebe4d6f3548f2402b1fb365c2b3e
