

function sayMyName()
{

console.log("p");
console.log("a");
console.log("c");
console.log("i");
console.log("f");
console.log("i");
console.log("c");
}

// sayMyName()

// 
// function add(number1,number2)//parameters
// {
//      console.log(number1+number2);
// }

// const result=add(3,5)//arguments
// console.log(result);
function add(number1,number2)//parameters
{
   return number1+number2

}

const result=add(3,5)//arguments
// 
function loginUserMessage(username)
{if(!username)
    {
        console.log("please enter userename")
        return
    }
    return `${username} welcome`
}

console.log(loginUserMessage())
