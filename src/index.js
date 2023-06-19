//----------------------------array destructuring in es6--------------------------------------------
let arr=["abc","def","ghi"];

let val1=arr[0];
let val2=arr[1];
let val3=arr[2];

//instead of this we can write this in one line using array destructuring es6 feature
let [val4,val5,val6]=arr;
console.log(`${val4} ${val5} ${val6}`);           //output=> abc def ghi



//----------------------------object destructuring in es6----------------------------------------------
let obj={
  name:"abc",
  id:2,
  phnum:1234
};

let o1=obj.name;
let o2=obj.id;
let o3=obj.phnum;

//instead of this we can write this in one line using object destructuring es6 feature
let {o4,o5,o6}=obj;
console.log(`${o4} ${o5} ${o6}`);           //output=> abc 2 1234



//--------------------------------------spread operator in reactjs---------------------------------------
//spread operator is denoted by ...

let arr3=[1,2,3];

let arr4=[4,5,...arr3,6,7];               //...arr3 will add the value of 1,2,3 in arr4=[4,5,1,2,3,6,7];
console.log(arr4)       //output will be 4,5,1,2,3,6,7


//2nd way of using spread operator in array destructuing
let game=["cod","god","aot"];
let [first,...remaining]=game;
console.log(first);           //output=cod
console.log(remaining);       //output=god,aot


//3rd way of using spread operator in object destructuing
let object={
name:"abhi",
id:2
};

let object2={
  lastname:"shek",
  rollno:4,
  ...object                  //object key value will be spread here
};

