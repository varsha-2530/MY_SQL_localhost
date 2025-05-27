const express = require("express");
const app = express();
const db = require('./model/connection')

const PORT = 3000;

app.use(express.json()); //accptes  json data


// app.post('/addUser', (req, res)=>{
//   const user =  {
//     name:req.body.name,
//     email:req.body.email,
//     phone:req.body.phone,
//     city:req.body.city,
//   }
//     //console.log(user);   
//     const sql = `INSERT INTO 'employee' SET ?` 
//     db.query(sql, user,(err, result)=>{
//        if(err) console.log(err.sqlMessage);
//         else res.json(user)
//     })
// });

app.post("/addUser", (req, res)=>{
    const user = {
        name: req.body.name, 
        email: req.body.email, 
        phone: req.body.phone, 
        city: req.body.city
    }

    // console.log(user)
    const sql = "INSERT INTO `employee` SET ?"
    db.query(sql,user, (err, result)=>{
        if (err) console.log(err.sqlMessage)
            else res.json(result)
    })
})



app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);

})