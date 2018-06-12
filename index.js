var recipes = new Object()

function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}

Object.assign({}, obj, { [key]: value})
