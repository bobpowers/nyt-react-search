import React, { Component } from 'react';
import {Navbar, Banner, SearchForm} from "./components";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <SearchForm />


  
    {/* <!-- <div class="bodyContent">
        {{#each dbArticles}}
        {{#unless saved}}
        <form class="inline-block" method="post" action="/">
        <div class="panel panel-default">
            <div class="panel-heading title clearfix">{{title}}
                <button type="submit" class="btn btn-default saveArticleBtn" name="articleID" value="{{_id}}">Save Article</button>
            </div>
            <div class="panel-body">
                <p class="summary">{{summary}}</p>
            </div>
        </div>
        </form>
        
        {{/unless}}
        {{/each}} --> */}
      </div>
    );
  }
}

export default App;
