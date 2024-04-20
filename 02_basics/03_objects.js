//  singleton
//Object.create





//object literals
//const mySym = Sysmbol("key1")//we figure it out later
const jsUser={
    name: "Pacific",
    mySym:"myKey1",
    age:20,
    location:"rewa",
    email:"pacic@mail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
    

}
jsUser.email="pacific@amazon.com"
//Object.freeze(jsUser)//now no change will reflect in obkect
jsUser.email="pacific@microsoft.com"

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.mySym);
console.log(jsUser);

jsUser.greeting=function()
{
    console.log("hello");
}
console.log(jsUser.greeting());

jsUser.greetingtwo=function()
{
    console.log(`hello ${this.name}`);
}

console.log(jsUser.greetingtwo());









