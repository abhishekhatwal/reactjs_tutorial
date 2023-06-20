//-----------------------------------map higher order function in es6 js--------------------------------------
//map function in js return a new array by allowing modification in old array items it has 3 parameter old array item,index of item and old array name
//let newarr=oldarr.map((item,index,oldarr)=>{});

let oldarr=[1,2,3,4];
let newarr=oldarr.map((item,index,oarr)=>{
    return item*100;
});
console.log(newarr);                //output - newarr=[100,200,300,400]



//-----------------------------------filter higher order function in es6 js--------------------------------------
//filter method return a new array having filter/specific items of oldarray by applying certain condtion on oldarray items.
//let newarr1=oldarr1.filter((item)=>{ return condition;});

let oldarr1=[4,5,6,7,8];
let newarr1=oldarr1.filter((item)=>{
    return item>5;                   //direct retrun condition dont use if then return
});
console.log(newarr1);                //output - newarray1=[6,7,8]





//-----------------------------similarity and difference in forEach loop and map function--------------------------------------
//similarity-both provide access and operation to array item also their syntex is same
let oldarr2=[1,2,3,4,5];
oldarr2.forEach((val,num,index)=>{
    let item=val*100;
    console.log(item);                         //output-100,200,300,400,500
});

oldarr2.map((val,index,oarr)=>{
    let item=val*100;
    console.log(item);                          //output-100,200,300,400,500
    return;                                //return array having 0-4 index but empty value bcz not returning any value. return=[,,,,]
});

//difference- main difference is that forEach loop does not provide any return value while map function return an new array with same or updated item value