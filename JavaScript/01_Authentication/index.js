require("dotenv").config(); // needs to be at the top
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);

// Session: before mongoose.connect
app.use(session({
    secret: "Our little secret.",
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request.
    saveUninitialized: false // Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
}));

// Passport
app.use(passport.initialize());
app.use(passport.session()); // uses passport to manage the session\

// Mongoose Connection
mongoose.connect("mongodb://127.0.0.1:27017/userDB");

// Mongoose - Schema + Models + passport
const userSchema = new mongoose.Schema ({
    email: String,
    password: String,
    googleId: String,
    secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model("user", userSchema);

// Passport - Using the sessions 
passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

// Google
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL:"https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ username: profile.displayName, googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

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

app.route("/auth/google")
    .get(passport.authenticate("google", { scope: ["profile"] }));

app.route("/auth/google/secrets")
    .get(passport.authenticate("google", { failureRedirect: "/login" }), (req, res) => res.redirect("/secrets"));

app.get("/secrets", async function(req, res){
  User.find({"secret":{$ne:null}})
    .then(function (foundUsers) {
      res.render("secrets",{usersWithSecrets:foundUsers});
      })
    .catch(function (err) {
      console.log(err);
      })
});

app.get("/submit", function(req, res){
  if(req.isAuthenticated()) {
    res.render("submit");
} else {
    res.redirect("/login");
}
});

app.post("/submit", async function(req, res){
  if(req.isAuthenticated()){
    const submittedSecret = req.body.secret;
    const user = await User.findById(req.user._id).exec(); // exec is part of mongoose API: Every model method that accepts query conditions can be executed by means of a callback or the exec method. returns exactly a promise.
    user.secret = submittedSecret;
    await user.save().then(() => res.redirect("/secrets"));
    return;
  }
  res.redirect("/login");
});

app.get("/logout",function(req,res){
    req.logout;
    res.redirect("/");
})

app.post("/register", async function(req, res){    

    User.register({username:req.body.username}, req.body.password, function(err, user) { // method from passport-local-mongoose
        if (err) { 
          console.log(err);
          res.redirect("/register");
        } else {
          passport.authenticate("local")(req,res,function(){
            res.redirect("/secrets");
          });          
        }
       
    });
});

app.post("/login", async function(req, res){
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    
    req.login(user, function(err){ 
        if (err) { 
          console.log(err);
          res.redirect("/login");
         } else {
            passport.authenticate("local")(req,res,function(){
                res.redirect("/secrets");
            });          
        }       
    });
    
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});