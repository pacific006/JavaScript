//array :resiablie & mix of data types 


const myArr= [0,1,2,3,4,5]
// console.log(myArr[0]);


const arr2=new Array(4,5,6,4,6,5)
//array method
// console.log(arr2[2]);
// myArr.push(6)
// console.log(myArr);
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)//add at first 

// console.log(myArr);
// myArr.shift()
// console.log(myArr);//delete from first
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));
const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);//stirng me change ho jaega
// console.log(typeof newArr)


//slice , splice


console.log("A",myArr);//A [ 0, 1, 2, 3, 4, 5 ]

const myn1=myArr.slice(1,3)//range does not include and does not manupulate original array
console.log(myn1);//[ 1, 2 ]
console.log("B",myArr);//B [ 0, 1, 2, 3, 4, 5 ]

const myn2=myArr.splice(1,3) //range include and manupulate the original array i.e remove the elements form original array
console.log(myn2);//[ 1, 2, 3 ]
console.log("C",myArr);//C [ 0, 4, 5 ]









