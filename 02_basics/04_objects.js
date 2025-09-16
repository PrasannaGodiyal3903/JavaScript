// const tinderUser={}
// tinderUser.id="123abc"
// tinderUser.name="Sammy"
// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
        firstname:"hitesh",
        lastname:"choudhary"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname)//? will be discussed later


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
// const obj3=Object.assign({},obj1,obj2,obj4) //{} is target, obj1,obj2... is source
// console.log(obj3)

//better method than assign:
//spread operator:

const obj3={...obj1, ...obj2, ...obj4}
console.log(obj3)

//when working on database: array of objects
//to access: objname[1].email

// console.log(Object.keys(regularUser))
// console.log(Object.values(regularUser))
// //console.log(Object.entries(regularUser))

// console.log(regularUser.hasOwnProperty('email'))


const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
const{courseInstructor:instructor}=course
console.log(instructor)