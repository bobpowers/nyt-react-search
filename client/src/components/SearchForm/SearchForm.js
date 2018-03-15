import React, { Component } from "react";
// import API from "../utils/scrapeCall.js";
// import DropCalendar from "../utils/DropCalendar.js"

class SearchForm extends Component {
    state = {
        'api-key': "3c103e5e613c460cbaff2b6052c928ca",
        'q': "",
        'begin_date': "19990101",
        'end_date': "20180222"
    }

    render() {
        return(
        <div className="container">
            <form>
                <div className="form-group">
                    <label>Search Articles:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Start Date (Optional - Numbers Only):</label>
                    <input type="text" className="form-control" placeholder="YYYYMMDD" />
                </div>
                <div className="form-group">
                    <label>End Date (Optional - Numbers Only):</label>
                    <input type="text" className="form-control" placeholder="YYYYMMDD" />
                </div>
                <div className="button-group">
                    <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i> Search</button>
                    <button type="button" className="btn btn-default"><i className="fa fa-trash"></i> Clear Results</button>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchForm;

// {
    // 'api-key': "3c103e5e613c460cbaff2b6052c928ca",
    // 'q': "black panther",
    // 'begin_date': "20180101",
    // 'end_date': "20180220"
//   },