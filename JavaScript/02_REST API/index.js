require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
mongoose.set("strictQuery", false);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Mongoose Connection
const connectDB = async () => {
    try {
      //const conn = await mongoose.connect(process.env.MONGO_URI);
      //console.log(`MongoDB Connected: ${conn.connection.host}`);
      await mongoose.connect('mongodb://127.0.0.1:27017/wikiDB');      
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
// Mongoose - Schema and Models
const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model("Article", articleSchema);


// Express - Routes
app.route("/articles")

.get(function(req, res){
    Article.find()
    .then(articles => {     
        console.log(articles);
        //res.render("home", { startingContent: homeStartingContent, posts: posts });     
    })
    .catch(err => {
      console.log(err);
    });  
})

.post(function(req, res){
    const article = new Article (
      {
        title: req.body.title,
        content: req.body.content
      }
    ); 
    //console.log(article);  
    article.save()
    .then(() => {
      console.log('Article added to DB.');
      res.redirect("/");
    }).catch(err => {
      res.status(400).send("Unable to save article to database.");
    });  
})

.delete(function(req, res){
    Article.deleteMany({})
    .then(()=> {
        res.send("Successfully deleted all the articles.")
    })
    .catch(err => {
        console.log(err);
    })
});

app.route("/articles/:articleTitle")

.get(async function(req, res){
    await Article.findOne({title: req.params.articleTitle})
    .then(function(result){    
        if(result) {
            //res.render ("post", {title: result.title, content: result.content});   
            res.send(result); 
        } else {
            res.send("Not a valid entry");
        }
        
    })
    .catch(function (e){
        console.log(e);
    });
})

.put(function(req, res){
    Article.replaceOne(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        {overwrite: true}
    )
    .then(function() {
        res.send("Update succesfull");
    })
    .catch(function(e){
        console.log(e);
    });
})

.patch(function(req, res){
    Article.findOneAndUpdate(
        {title: req.params.articleTitle},
        {$set: req.body} // the user decides                
    )
    .then(function(article) {
        if (article) {
            res.send("Article successfully updated");
        } else {
            res.send("Failed updating the article");
        }        
    })
    .catch(function(e){
        console.log(e);
    });
})

.delete(function(req, res){
    Article.deleteOne(
        {title: req.params.articleTitle}
    ).then(function(article){
        if (article) {
            res.send("Article successfully deleted");
        } else {
            res.send("Failed deleting the article");
        }
    }).catch(function(e){
        console.log(e);
    });
});

// Listen
connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  });