const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
        if (!eqArrays(actual[i], expected[i])) {
          return false;
        }
      } else if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
};

// returns true if both objects have identical keys with identical values
// otherwise you get back a false
const eqObjects = function(object1, object2) {
if (Object.keys(object1).length !== Object.keys(object2).length) {
  return false;
} for (const key in object1) {
  if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    if (eqArrays(object1[key], object2[key]) === false) {
      return false;
    } 
  } else if (object1[key] !== object2[key]) {
    return false;
  } else if (object1[key] !== object2[key]) {
    return false;
  }
}
return true;
};
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

//const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

