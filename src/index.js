/*The JavaScript map() function is a built-in higher-order function that is used to transform elements in an array and create a new array 
based on the transformation. It takes in a callback function as its argument and applies this function to each element of the original array, returning a new array with the transformed values.*/

//syntex => array.map(callback(element, index, array);

//map function in js
const arr = ["abc", "def", "ghi"];

const newarr = arr.map(function (val) {
    return `value is ${val}`;                          //outut will be newarray=["value is abc","value is def","value is ghi"]
});

console.log(newarr);


//map function on array of object
const arr1 = [
    { id: 1, name: "abhi", course: "btech" },
    { id: 2, name: "shek", course: "mtech" },
    { id: 3, name: "abc", course: "bsc" }
];

const newarr1 = arr1.map(function (val) {
    return `name is ${val.name}`;                         //it will return all names as array                        
});

console.log(newarr1);



//callback function in js
//In JavaScript, a callback function is a function that is passed as an argument to another function and is invoked at a later point in time. The primary purpose of a callback function is to allow you to define what should happen after a certain operation or task is completed.
  
  function calculate(a, b,callback) {        //add function passed in callback variable
    let result= a + b;
    return callback(result);
  }
  
  function callback(result) {
    return `result will be ${result}`;
  }
  
  console.log(calculate(5, 3, add));    

  