import React from "react";
import './Scroll.scss'

const Scroll = (props) => {
    return(
        <div className="overflow-y-scroll scroll">{props.children}</div>
    );
}

export default Scroll;