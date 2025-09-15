const myArr=[0,1,2,3,4,5]
//resizable 
//can contain mix of datatypes
const myArr2=new Array(1,2,3,4,5)
//push,pop
//myArr.unshift(9) //-->adds 9 in starting of array
//shift->pops from the front
//indexOf, includes....

const newArr=myArr.join()//->converts the array to string
console.log(newArr)
console.log(typeof(newArr))
//slice... array remains same after slicing(no changes to original array)
//splice?
const myn2=myArr.splice(1,3)
//jo elements bach gye after splicing, wohi rehte hai original array mai bhi
//aur splice mai end range bhi include hoti hai
console.log(myn2)
console.log(myArr)
