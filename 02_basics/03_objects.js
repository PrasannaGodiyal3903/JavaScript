//A Singleton is a design pattern where you ensure that only one instance of an object is created and shared across the whole program.//object.create
const mySym=Symbol("hey1")
const JsUser={
    name:"Hitesh",
    "full name":"Choudhary",
    [mySym]:"mykey1",//to declare symbol as a object we need to use square brackets
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDats:["Monday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
//console.log(typeof JsUser["mySym"])

//Object.freeze(JsUser)//now values change nhi kr paaoge aap
//console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JS user")
}
console.log(JsUser.greeting());
//console.log(JsUser.greeting)

JsUser.greetingTwo=function(){
    console.log(`Hello JS User ${this.name}`)
}
console.log(JsUser.greetingTwo())