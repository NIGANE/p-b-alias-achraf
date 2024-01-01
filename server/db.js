

const { MongoClient } = require('mongodb')


let conDb ;


module.exports={
    connection:async (af)=>{
        let con= new MongoClient('mongodb://127.0.0.1:27017/')
        conDb = con.db('namx')
        try {
               await con.connect()
               console.log("connected to Database")
               return af()
        } catch (err) {
            console.log('error Connecting to DB')
            return af(err)
        }
    },
    dbName:()=>conDb
}