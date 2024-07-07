const express = require("express");
const Loginpage = express.Router(); 
const  database  = require('../DB/Connect');


Loginpage.get("/Login", (req, res) => {
     database.query("SELECT * FROM user", (eror, result) => {
         if (result) {
           res.status(200).json(
              {
                 user: {
                     data: result
                 },
                massage: "Login sukses bang"
              }
           )
        } else {
            console.log(res.status(500), `${eror}`);
        }
     }); 

});

module.exports = Loginpage;