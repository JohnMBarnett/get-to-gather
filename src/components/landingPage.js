import React, { useState } from "react";
import "../css/style.css"

const LandingPage = () => {

    return (
        <div className="form_container">
            <h1>Sign Up For Your Free Get-To-Gather Account</h1>
            <form className="form">
                <div>
                    <input name="username" type="text" placeholder="Set username"></input>
                    <input name="password" type="password" placeholder="Set password"></input>
                </div>
                <input name="email" type="email" placeholder="Your email"></input>
                <button>Create Account</button>
            </form>
        </div>
    )
}

export default LandingPage;