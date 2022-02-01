import React from 'react'
import './mainPage.css'
import logo from "../Components/pics/animation.gif"

const Header = () => {
    return (
        <div className="allHeader">
            <div className="titles">
                <h2>Welcome to...</h2>
                <h1 className="mainTitle">Caro_es_ca<span className="resalt">sino</span></h1>
                <h2>A virtual place for having fun!</h2>
            </div>
            <div className="logo">
                <img className= "dices" src={logo} alt={"logo"} />
            </div>
        </div>
    )
}

export default Header
