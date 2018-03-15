import React from "react";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
const Navbar = props => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="/">NYT Search</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="/">Home <span className="sr-only"></span></a>
                    </li>
                    <li>
                        <a href="/saved">Saved Articles</a>
                    </li>
                </ul>
                {/* <a href="/scrape">
                    <button type="button" id="getNewArticles" className="btn btn-primary navbar-btn">Get New Articles</button>
                </a> */}
            </div>
        </div>
    </nav>





);

export default Navbar;









