import React, { useState } from "react";
import "../styles/Hotel.css";
function Hotel(props) {
    function handleClick(e) {}

    return (
        <div className="card">
            <div className="card-image">
                <img />
            </div>
            <div className="card-text">
                <h2></h2>
                <span className="location"></span>
                <h4></h4>
            </div>
            <button className={`button`}>Add to Favourites</button>
        </div>
    );
}

export default Hotel;
