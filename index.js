const fetching = async ()=>{
    const bd = {
        "email":"admin@gmail.com",
        "password":"admin"
        
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const res = await fetch("http://127.0.0.1:3001/login",{method:'POST',body:JSON.stringify(bd),headers:myHeaders})
    const data = await res.json()
    console.log(data)
}

fetching()