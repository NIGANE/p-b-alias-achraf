
const check = async (email,col)=>{
    let data = await col.findOne({email})
  
    return data
}

const login = async (email ,pass ,collection)=>{
    if(email){
        if(pass){
            let data = await check(email, collection)
            
            if(data) {
                if (data.password === pass ){
                    return data
                }else{
                    return {error: "you've entered the wrong password " }
                }
            }else{
                return {error : "there is not account with this email"}
            }

        }else{
            return {error:'please enter a password valid'}
        }
    }else{
        return {error:'please enter a valid email'}
    }
    
}
const signup = async(name ,email ,pass ,collection )=>{
    if(name){
        if(email){
            if(pass){
                
                    let data = await check(email.toLowerCase() ,collection)

                    if (data){
                        return {error : "this email is already used"}
                    }else{
                    await collection.insertOne({'email':email.toLowerCase() ,'password':pass ,'name':name.toLowerCase()})

                    return login(email,pass,collection)
                }
                

            }else{
                return {error:'please enter a valid password'}
            }
        }else{
            return {error:'please enter an valid email'}
        }
    }else{
        return {error:'please enter an valid name'}
    }
}


module.exports  = {
    
    
    check,login,signup

    
    
}