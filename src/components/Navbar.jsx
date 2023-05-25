import React from "react"

// Image imports
import world from "../images/world.png";

const Navbar = () => {
    return (
        <nav className="nav">
            <img className="nav--img" src={world} />
            <h3>My Travel Journal</h3>
        </nav>
    )
}

export default Navbar;