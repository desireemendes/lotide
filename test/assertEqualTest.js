const assertEqual = require('../assertEqual');
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const head = require('../head');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");