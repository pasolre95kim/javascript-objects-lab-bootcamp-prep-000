var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return obj
}

function updateObjectWithKeyAndValue(obj,key,value) {
  object[key] = value
  return Object.assign({}, object, { [key]: value})
}
