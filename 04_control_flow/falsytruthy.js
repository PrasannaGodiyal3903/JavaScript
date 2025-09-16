//falsy values
//false 0,-0,BigInt 0n, "",null,undefined,NaN 
const userEmail=[]
if(userEmail){ //empty array->truthy value
     console.log("Got user email");

}
else{
    console.log("Don't have user email");
}

//truthy values
// "0",'false'(string ke andar koi bhi value),[],{},function(){}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}