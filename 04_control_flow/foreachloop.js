// const coding=["js","ruby","java","python","cpp"]

// coding.forEach((item)=>{
//     console.log(item)
// })

const myNums=[1,2,3,4,5,6,7,8,10]

//const newNums=myNums.filter((num)=>num>4)

// const newNums=myNums.filter((num)=>{
//     return num>4 //curly braces ke andar likh rhe to return to likhna hi pdega laadle
// })
// console.log(newNums)

// const newNums=[]

// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

const newNums=myNums.map((num)=>{return num+10})
console.log(newNums)

//REDUCE REHTA HAI DEKH LENA EK BAAR