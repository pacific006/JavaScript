

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

// console.log(loginUserMessage())
/*when we dont know the number of argument user is going to send*/
function calculateCartPrice(...num1)//rest operator
{
    return num1;

}

// console.log(calculateCartPrice(200,400,500,600,7000,8000))

const user={
    username:"hitesh",
    price:199
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}

handleObject(user)

const arr=[200,300,400,500]

function returnSecondValue(getValue)
{
    return getValue[1]
}

console.log(returnSecondValue(arr));