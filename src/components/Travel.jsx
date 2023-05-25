import React from "react"
import location from "../images/placeholder.png"

const Travel = (props) => {
    return (
        <div className="travel--container">
            <div className="travel--img__container">
                <img src={props.imageUrl} className="travel--img"  />
            </div>
            <div className="travel--details">
                <div className="location--details__specs">
                    <img className="location--img" src={location} />
                    <span className="location--name">{props.location}</span>
                    <a className="location--map__link" href="">View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Travel;