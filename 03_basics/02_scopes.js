function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username) //can be accessed
    }
    //console.log(website)//cannot access
    two()
}
one()