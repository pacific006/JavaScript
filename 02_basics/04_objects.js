// const tinderUSer=new Object()

const tinderUSer={}

tinderUSer.id="123asf"
tinderUSer.name="harsh"
tinderUSer.isLoggedIn=false

const regularUser={
    email:"sadjalkfa",
    fullname:{
        usefullname:{
        firstname:"hitesh",
        lastname:"chaudhary"
        }
    }
}

// console.log(regularUser.fullname.usefullname.firstname);

const obj1={1:"a",2:"b"}

const obj2={3:"c",4:"d"}
//const obj3={obj1,obj2}//object inside obj
//const obj3=Object.assign({},obj1,obj2)//{}=>destination
const obj3={...obj1, ...obj2}
// console.log(obj3);

///destructuring of objects

const course={
    coursename:"js",
    price:"999",
    courseInstructtor:"hariram"
}

//course.courseInstructtor

/*to make code more cleaner*/


const {courseInstructtor:insructor} =course

//console.log(courseInstructtor);
// console.log(insructor);











