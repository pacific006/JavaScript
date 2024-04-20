const marvel=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

// marvel.push(dc)//push in existing array
// console.log(marvel)//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] this show arrays can take any type of value in js even arrays itself in an array

const all=marvel.concat(dc)//retutn an array after cantating values
// console.log(all);

const allnew=[...marvel,...dc]//...spread operator combine two or more array;
// console.log(allnew);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
//flat function 
const usalbleAnotherArray=another_array.flat(Infinity)
// console.log(usalbleAnotherArray);

