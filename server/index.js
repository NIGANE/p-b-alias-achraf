const  express = require("express");
const  app = express();
const {connection,dbName} = require('./db')
const  cors = require("cors");
const auth = require('./logic/auth')
 




app.use(cors());
app.use(express.json())
app.use("/catigories",express.static("./../client/src/assets/images/CatImg/"));
app.use("/products",express.static("./../client/src/assets/images/PrImg/"));


app.get("/catigories", async(req, res) => {
    const col= await db.collection('catigories')
    const data = await col.find().toArray()
    res.json(data);
});

app.get("/products", async(req, res) => {
    const col= await db.collection('products')
    const data = await col.find().toArray()
    res.json(data);
});

app.post('/login', async (req,res)=>{
    let {email , password} = req.body;
    
    const col = db.collection('users')
    const user = await auth.login(email,password,col)
    if(user.error){
        res.json({error:user.error})
    }else{
        res.status(200).json(user)
    }
    

})
app.post('/signup', async (req,res)=>{
    let {username ,email , password} = req.body;
    
    const col =await  db.collection('users')
    const user = await auth.signup(username ,email,password,col)
    if(user.error){
        res.json({error:user.error})
    }else{
        res.json(user)
    }

})





let db ;
connection(
     (err)=>{
        if (err){
            console.log("errror" )
        }else{
            app.listen(3001, () => {
                console.log("server is listening on : ",`http://localhost:3001`);
            })
            db = dbName()
        }
    }
)



