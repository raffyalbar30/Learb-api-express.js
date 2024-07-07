const express = require("express");
const Registerpage = express.Router();
const database = require('../DB/Connect');




Registerpage.post("/register", (req, res) => {
      const { username, password } = req.body;
   
      database.query("SELECT * FROM user", (eror, result) => {
         if (result) {
             database.query(`INSERT INTO user (id, username, password) VALUES (NULL, '${username}', '${password}')`)
             return res.status(200).json({
                message: "data berhasil di tambahkan"
             });
         } else {
            res.status(400).json({
                message: eror
            })
         }
         
      })

      console.log(`Username: ${username}, Password: ${password}`);
})


module.exports = Registerpage;