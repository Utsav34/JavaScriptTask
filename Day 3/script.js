const arr= ['Ram', 'Mohan', 'three', 'Shyam'];
const y= new Array(1, 2, 3, 4, 5, 6);
var ut=['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// const new = (1, 2, 3, 4, 5);

console.log('with output', arr)
console.log('with new keyword', y)
console.log('output is a', ut)

// Array of methods
// .length
// .indexof()
// .includes()
// .push()
// .unshift()
// .pop()
// .shift()
// .reverse
// .map
// .forEach()
// .filter()
// .sort()
// .concat()
// .every()
// .some()
// .join()
// .reduce()
// .find()
// .findIndex()
// .fill()
// .slice()


// Example of .length
console.log('first array length is four', arr.length)
console.log("second array length is five", y.length)
console.log("third array length is", ut)
var getLastval =arr[arr.length -1];
console.log('Last value of array is', getLastval)
var getLastval =y[y.length -1];
console.log('Last value of y is', getLastval)
var getFirstval =arr[arr. length -4];
console.log('First value of arr', getFirstval)


// Example of indexof()
var getPos = arr.indexOf('two')
console.log('getPos', getPos)
var getPos = y.indexOf('five')
console.log('getPos', getPos)

// Example of includes()
var getPos = y.includes(2)
console.log ('getPos', getPos)
var result = y.includes(3)
console.log ('result', result)

// used for value change
 arr[2] = 'Utsav Goel'
 console.log (arr)

// Example of push 
var ins1 = arr.push('Krsna');
console.log(arr);

// Example of unshift
var insert = arr.unshift('Hari')
console.log(arr)

// Example of Pop
var str = y.pop('5')
console.log(y);


// Example of shift
var shft = arr.shift()
console.log(arr);

//  Example of reverse 
var revsr = arr.reverse()
console.log(arr);

// Example of map
var data = y.map(data => data + 10)
console.log('map data', data)

// Example of filter
let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
let positive_array = numbers.filter(value => value >= 0);
console.log(positive_array);

// Example of sort
let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
animals.sort();
console.log(animals)

// Example of concat
var totn_string = 'TheTech';
console.log(totn_string.concat('On','The','Net'));

// Example of slice
let myArray = [2,4,5,7,9,12,14];
let slicedArray = myArray.slice(2);
console.log(myArray)
console.log(slicedArray)

// Example of join
const elements = ['Ram', 'Mohan', 'Shyam'];
console.log(elements.join('krsna'));
console.log(elements.join('-'));

// Example of findIndex
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 50;
console.log(array1.findIndex(isLargeNumber));

// Example of some
const array = [1, 2, 3, 7, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even));



