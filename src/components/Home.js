import React, { useState } from "react";
import "../styles/Hotel.css";
function Hotel(props) {
    const { id, name, location, price, img } = props.data;
    function handleClick(e) {
        // Complete the handleclick function
    }

    return (
        <div className="card">
            <div className="card-image">
                <img src={img} />
            </div>
            <div className="card-text">
                <h2>{name}</h2>
                <span className="location"> {location}</span>
                <h4>Rs. {price} per night</h4>
            </div>
            <button className={`button`} onClick={handleClick}>
                Add to Favourites
            </button>
        </div>
    );
}

export default Hotel;
