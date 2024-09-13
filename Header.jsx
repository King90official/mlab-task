import React from 'react'

const Header =() => {

    return(
        <header className="header">
        <div className="logo">
            <h1>Lyf-)</h1>
        </div>

        <div className="Contact">
            <p>insurance@sapa.za</p>
        </div>

        <div className="header-actions">
            <button className="login-btn">Log In</button>
            <button className="get-started-btn">Get Started</button>

        </div>
        <hr></hr>
        </header>
        
    );

}

export default Header