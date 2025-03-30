// Implementation of myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  
  // Implementation of myMap
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
    return result;
  }
  
  // Implementation of myReduce
  function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIdx = 0;
  
    if (acc === undefined) {
      acc = values[0];
      startIdx = 1;
    }
  
    for (let i = startIdx; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
    return acc;
  }
  
  // Implementation of myFind
  function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        return values[i];
      }
    }
    return undefined;
  }
  
  // Implementation of myFilter
  function myFilter(collection, predicate) {
    const result = [];
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        result.push(values[i]);
      }
    }
    return result;
  }
  
  // Implementation of mySize
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // Implementation of myFirst
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  // Implementation of myLast
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  // Implementation of myKeys
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // Implementation of myValues
  function myValues(object) {
    return Object.values(object);
  }
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues,
  };