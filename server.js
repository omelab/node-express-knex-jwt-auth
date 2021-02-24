require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const auth = require('./app/controllers/auth')

const app = express();




var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route without auth
app.get("/", (req, res) => {
  res.json({ message: "Hello universe" });
});

app.post("/login", auth.login);

//Get routes from routes folder with auth
app.use('/', authenticateToken, require("./app/routes/api"));




function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err){
      return res.sendStatus(403)
    }else{
      next()
    } 
  })
}



const PORT = process.env.PORT || 8989;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

