 //function sayMyName(){

 //}
 //sayMyName()

//  function login(username="sam"){ //default value is sam if nothing passed in function
//     return `${username} just logged in`
//  }
//  console.log(login("Prasanna"))
//  console.log(login())


// function calculateCarPrice(...num){ //...is rest operator here
//     return num
// }
// console.log(calculateCarPrice(200,400,500,2000))

// function calculateCarPrice(val1,val2,...num1){
//     return num1
// }
// console.log(calculateCarPrice(200,400,500,2000))

const user={
    username:"hitesh",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
