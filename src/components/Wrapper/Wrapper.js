import React from "react";
import "./Wrapper.css"; //imports the style

const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;