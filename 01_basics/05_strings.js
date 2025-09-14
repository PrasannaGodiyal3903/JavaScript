const name="Hitesh"
const repoCount=50
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
//+ use krke string concatenate krne se achha hai upar wala method use kro
const gameName=new String('hiteshfc')
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase());
const newString=gameName.substring(0,4) //cannot enter negative index in this
console.log(newString)
const anotherString=gameName.slice(-8,4)
console.log(anotherString)
const newStringOne="   hitesh    "
console.log(newStringOne) //will print string with spaces
console.log(newStringOne.trim()) //will print string with spaces removed
const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('altroz'))

const newName="Prasanna-fc-com"
console.log(newName.split('-'))