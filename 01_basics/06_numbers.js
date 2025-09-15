const balance= new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2)) // adds 2 decimal places

const otherNumber=123.8966
console.log(otherNumber.toPrecision(4));

const hundreds=1000000 
console.log(hundreds.toLocaleString('en-IN'));
//converts in format like 10,00,000 the above number

console.log(Math.abs(-4));
console.log(Math.round(4.6))
console.log(Math.ceil(4.2)) //similarly max
console.log(Math.max(4,3,6,8)) //similarly min

console.log(Math.random()) //generates random values between 0 and 1
console.log(Math.floor(Math.random()*10)+1) //+1 is done to avoid 0.0 wala case

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) //to generate numbers within a given range (min and max)