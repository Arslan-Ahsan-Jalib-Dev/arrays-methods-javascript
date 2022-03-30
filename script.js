//***  Example of arrays ForEach Method in javascript 
var myarray=[9,10,11,12,13];
myarray[20]=100;
console.log(myarray);
//forEach takes the callback function as an argument and this callback function takes three arguments current   item its index and array which is to be processed

myarray.forEach(display);              

function display(item,index,arry){
//    console.log(index + " " + item + " ");
}
//convert it in to arrow function
 myarray.forEach((item,index)=>{
//     console.log(index + " " + item);
 })

// 1) Sum of the array
var result=0;
myarray.map(item=>{
    result=item + result;
})
//console.log(result);
// 2) Frequency of Number in the array

var arr1=['a','b','c','d','a','b','d','d','d','d','a','b','a'];
var count=[];
   
arr1.forEach((item)=>{
   
    if(count[item]){
        count[item]++;
    }
    else{
        count[item]=1;
    }
})
console.log(count);