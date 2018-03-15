var express = require('express');
var router = express.Router();
var request = require("request");
var mongojs = require("mongojs");
var mongoose = require("mongoose");
var db = require("../models");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

router.get('/saved', function(req, res){
request.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    qs: {
      'api-key': "3c103e5e613c460cbaff2b6052c928ca",
      'q': "black panther",
      'begin_date': "20180101",
      'end_date': "20180220"
    },
  }, function(err, response, body) {
    res.json(body);
    body = JSON.parse(body);
    console.log(body);
  })
});






/* GET for Home Page- Returns Articles*/
// router.get('/', function(req, res, next) {
//     db.Article.find({}).limit(20).sort({date: -1})
//     .then(function(dbArticles) {
//       res.render('index', {dbArticles});
//     })
//     .catch(function(err) {
//       res.json(err);
//     });
// });
// POST for Home Page- Sends selected article to Saved page
// router.post('/', function(req ,res){
//   db.Article.update({_id: req.body.articleID},{saved: true})
//   .then(function(){
//     res.redirect('/')
//   })
// });

// GET for Saved- Returns Saved Articles
// router.get("/saved", function(req, res){
//   db.Article.find({})
//   .then(function(dbArticles){
//     res.render('saved', {dbArticles})
//   })
//   .catch(function(err) {
//     res.json(err);
//   })
// });

// POST for Saved- Deletes article
// router.post("/saved", function(req, res){
//   db.Article.remove({_id: req.body.articleID})
//   .then(function(){
//     res.redirect('/saved');
//   })
// })

// SCRAPE NYT AND ADD TO DB
// router.get("/scrape", function(req, res) {
// 	request("https://www.nytimes.com/section/technology?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=Tech&WT.nav=page", function(error, response, html) {
//     var $ = cheerio.load(html);
//     var responseCounter = 10;
//     if (error) {
//       console.log(error);
//       res.send("Scrape Failed");
//     }
// 	 	$("a.story-link").each(function(i, element) {
// 	  		var link = $(element).attr("href");
// 	    	var summary = $(element).find("p.summary").text();
//         var title = $(element).find("h2.headline").text();
//         var addArticle = {
// 		      title: title,
// 		      summary: summary,
// 		      link: link
//         }
//         db.Article.create(addArticle)
//         .then(function(returnArticles){
//           console.log("added article");
//         })
//         .catch(function(err){
//           res.json(err);
//         })
// 	  	});
//     res.redirect("/");
// 	});
// })

/* 
GET will return note associated with article
POST will add note to article */
// router.route("/saved/:id")
// .get(function(req, res){
//     db.Article.findOne({ _id: req.params.id })
//     .populate("note")
//     .then(function(dbArticle) {
//       res.json(dbArticle);
//     })
//     .catch(function(err) {
//       res.json(err);
//     });
// })
// .post(function(req, res){
//     var addComment = {
//         comment: req.body.newNote
//     };
//     db.Notes.create(addComment)
//     .then(function(dbNote) {
//       return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
//     })
//     .then(function(dbArticle) {
//       res.redirect('/saved');
//     })
//     .catch(function(err) {
//       res.json(err);
//     });
// });

// POST for deleting note associated with article
// router.post('/note/:id', function(req ,res){
//   db.Notes.remove({_id: req.body.noteDeleteID})
//   .then(function(){
//     console.log("Note Deleted")
//   })
//   .then(function(){
//     res.redirect('/saved');
//   })
//   .catch(function(err) {
//     res.json(err);
//   });
// });


module.exports = router;
  








// qs: {
//     'api-key': "3c103e5e613c460cbaff2b6052c928ca",
//     'q': "",
//     'begin_date': "",
//     'end_date': ""
// }