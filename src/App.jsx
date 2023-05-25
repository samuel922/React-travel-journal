import React from "react"
import Navbar from "./components/Navbar";
import TravelList from "./components/TravelList";
import data from "./data/Data"

// Css
import "./App.css"

const App = () => {
  console.log(data)
  return (
    <div className="app--container">
        <Navbar />
        <TravelList data={data} />
    </div>
  )
}

export default App;