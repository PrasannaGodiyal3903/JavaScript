(function chai(){
    console.log(`DB CONNECTED`)
})(); //iife(immediately invoked function expressions) //semicolon se end bhi krna hota hai

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
}) ('hitesh')