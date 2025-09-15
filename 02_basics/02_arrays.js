const marvel_heroes=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
// marvel_heroes.push(dc)//array ke andar array bn jaayegi
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const newarr=(marvel_heroes.concat(dc)) // everything merged in a single array returns everything in a new array
// console.log(newarr)y

const all_new_heroes=[...marvel_heroes, ...dc] //spread can also be used to plug values of both arrays into a single new array
console.log(all_new_heroes)

const another_array=[1,2,3,[4,5,6],[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity) //flat se jo bhi andar subarrays bne hue hai wo hat jaate hai
console.log(real_another_array);
//isArray....

//console.log(Array.from("Hitesh"))
//this will convert this string into array

console.log(Array.from({name:"hitesh"}))
//will output an empty array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
