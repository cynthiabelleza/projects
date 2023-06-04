require("dotenv").config(); // needs to be at the top
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);

// Mongoose Connection
mongoose.connect("mongodb://127.0.0.1:27017/userDB");
// Mongoose Connection
// const connectDB = async () => {
//     try {
//       const conn = await mongoose.connect(process.env.MONGO_URI);
//       console.log(`MongoDB Connected: ${conn.connection.host}`);
//       //await mongoose.connect("mongodb://127.0.0.1:27017/userDB");      
//     } catch (error) {
//       console.log(error);
//       process.exit(1);
//     }
// };

// Mongoose - Schema and Models
const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});

const User = mongoose.model("user", userSchema);

// Express - Routes
app.get("/", function(req, res){
    res.render("home");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.get("/register", function(req, res){
    res.render("register");
});

app.post("/register", async function(req, res){    

    const hash = bcrypt.hashSync(req.body.password, saltRounds);
    const newUser = new User({
        email: req.body.username,
        password: hash
    });
    
    newUser.save()
    .then(() => {
        console.log('User added to DB.');
        res.render("secrets");
    }).catch(err => {
        console.log(err);
        res.status(400).send("Unable to save user to database.");
    });
});

app.post("/login", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    await User.findOne({email: username})
    .then((foundUser)=>{
      if(foundUser) {        
        if(bcrypt.compareSync(req.body.password, foundUser.password)){
            res.render("secrets");
        } else {
            res.send("Wrong password");
        }
     }
    })
    .catch((err)=>{
      console.log(err)
    })
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});