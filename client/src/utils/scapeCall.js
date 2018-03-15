import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  grabArticles: function(query) {

   return axios({
      method:'get',
      url:'https://api.nytimes.com/svc/search/v2/articlesearch.json',
      qs: query
    })
    // return axios.get("/api/recipes", { params: { q: query}});
  }
};

// request.get({
//   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//   qs: {
//     'api-key': "3c103e5e613c460cbaff2b6052c928ca",
//     'q': "black panther",
//     'begin_date': "20180101",
//     'end_date': "20180220"
//   },
// }, function(err, response, body) {
//   body = JSON.parse(body);
//   console.log(body);
// })