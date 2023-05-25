import React from "react"
import Travel from "./Travel"

const TravelList = (props) => {
    console.log(props)
    return (
        <div className="travel--list__container">
            {
                props.data.map(item => (
                    <Travel 
                        key={item.id}
                        {...item}
                    />
                ))
            }
        </div>
    )
}

export default TravelList;