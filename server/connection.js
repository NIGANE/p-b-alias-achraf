const {createConnection} = require('mysql')

const connection = createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"wee"
})
connection.connect(err=>{
    let mess = err ? 'connection failded' : 'connected'
    console.log(`myslq : ${mess}`);
});

module.exports = connection ;