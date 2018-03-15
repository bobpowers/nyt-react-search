var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  published_date: {
    type: String,
    required: true
  },
  date_saved: { 
    type: Date, 
    default: Date.now 
  }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;