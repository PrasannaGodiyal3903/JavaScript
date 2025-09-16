// const user={
//     username:"hitesh",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username},welcome to website`)
//     }
// }

// user.welcomeMessage()

//function ke andar this use nhi kr skte
//arrow function:
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// const addTwo=(num1,num2)=>(num1+num2) //one line declaration return likhne ki zarurat nhi

const addTwo=(num1,num2)=>({username:"hitesh"})
console.log(addTwo(3,4))