const express = require("express");
const uploader = express.Router();
// const database = require('../DB/Connect');



    uploader.post("/uploader", (req,res)=>{
    // const { user, title} = req.body;
    const image = req.file;
    console.log(image);
    

    // database.query( "SELECT * FROM uploader", (eror,result) => {
    //       if (result) {
    //           database.query(`INSERT INTO uploader (id, user, title, image) VALUES (NULL, '${user}', '${title}', ${image.file.filename})`)
    //       }  else {
    //         res.status(400).json({
    //             message: eror
    //         })
    //      }
    // }
    // )

    // console.log(`Username: ${user}, Password: ${title}`);
});

module.exports = uploader;