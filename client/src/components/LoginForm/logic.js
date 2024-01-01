
const loginFetch = async (url,bd) =>{
    
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    
    const res = await fetch(
        url,
        {method:'POST',body:JSON.stringify(bd),headers:myHeaders}
    )
        const data =  await res.json()
        return data
    
}



module.exports = {
    loginFetch
}