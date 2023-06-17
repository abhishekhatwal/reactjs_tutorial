import React from "react";

//props(can be anything)  allow us to access user define attributes in index.js(where card function define)
function Card(props){
    return(
        <>
        <div className="cards">
            <div className="card">
              <img src={props.imgsrc} alt="pics" className="card__img"/>
              <div className="card__info">
                <span className="card__category">{props.title}</span>
                <h3 className="card__title">{props.sname}</h3>
                <a href={props.link} target="_blank">
                   <button>Watch Now</button>
                </a>
              </div>
            </div>
        </div>
        </>
    );
}

export default Card;