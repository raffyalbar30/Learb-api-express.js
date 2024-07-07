const express = require('express');
const app = express();
const cors = require("cors");
const multer = require("multer");
app.use(cors());
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json()); 



      const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, "./assets");
        },
        filename: function (req, file, cb) {
          const date = Date.now();
          cb(null, date + file.originalname);
        },
      });

    const upload = multer({  storage });

const  LoginPage = require('./Api/router/Login/Login');
const  RegisterPage = require('./Api/router/Register/Register');
const  uploader = require('./Api/router/Feuture/uploader');

app.use("/Auth", LoginPage);
app.use("/Auth", RegisterPage);
app.use("/api", uploader(upload.single("file")));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

  module.exports = app;