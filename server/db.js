import { MongoClient } from "mongodb";


let conDb ;


module.exports={
    connection:(af)=>{
        let con= new MongoClient('mongodb://127.0.0.1:27017/')
        conDb = con.db('')
        
    }
}