var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return obj
}

function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({}, object, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object,key) {
  delete object[key]
  return object
}

function deleteFromObjectByKey(object,key,value) {
  return Object.assign({}, obj, { [key]: value })
}
