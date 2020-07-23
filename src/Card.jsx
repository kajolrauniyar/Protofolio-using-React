import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/s1.jpg";


const Card= (props)=>{
    return(
        <>
            <div className="col-md-4 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">
                            some quick example to build on the card title and make up the bulk of the cars's Content
                        </p>
                        <NavLink to="" className="btn btn-primary"> Go Somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;