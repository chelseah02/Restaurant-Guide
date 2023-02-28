import React from "react";

const Restaurant = (props) => {
    return(
        <div className="card">
            <img className="card-img-top" src={props.image}></img>
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text"> Cuisine: {props.cuisine} </p>
                <p className="card-text"> {props.address} </p>
                <p className="card-text"> {props.dist} miles from University of Texas at Dallas</p>
                <a className="menu" href={props.menu} class="btn btn-menu">See Menu</a>
            </div>
        </div>
    )
}

export default Restaurant;