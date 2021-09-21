
A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @desireemendes/lotide`

**Require it:**

`const _ = require('@desireemendes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Returns the first item in an array.
* `tail`: Returns the tail of an array.
* `middle`: Takes in array and returns the middle-most elements.
* `without`: Returns a subset of a given array, removing unwanted elements.
* `countOnly`: Given an array and an object, it will return an object containing counts of everything that the input object listed.
* `countLetters`: Takes in a sentence as a string and returns the count of each of the letters in that sentence.
* `findKey`: Takes in an object and a callback. It scans the object and returns the first key for which the callback returns a truthy value.
* `findKeyByValue`: Takes in an object and value, scans the object and returns the first key which contains the given value.
* `map`: Returns a new array based on the map function which takes in an array to map and a callback function.
* `takeUntil`: Returns a slice of an array with elements taken from the beginning.
