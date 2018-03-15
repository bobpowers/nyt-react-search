import React from "react";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
const Banner = props => (
    <div className="topTitle">
        <div className="imageAdjustment">
            <h1>React Article Search</h1>
            <p>NYT edition</p>
        </div>
    </div>
);

export default Banner;