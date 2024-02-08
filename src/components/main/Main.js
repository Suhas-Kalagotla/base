import react from 'react'
import "./main.css"
import logo from "../../images/logo.svg"
import git from "../../images/github.svg"
import twitter from "../../images/twitter.svg"
import linkedin from "../../images/linkedin.svg"
import discord from "../../images/discord.svg"
import LoginBox from "../loginBox/LoginBox.js"
import {Link} from "react-router-dom"

const Main = () => {
    return (
        <div className="main">
            <div className="left">
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="title">
                <h2>Base</h2>
            <div className="socialMedia">
               <img src={git}/> 
               <img src={twitter}/>               
               <img src={linkedin}/>
               <img src={discord}/>
            </div>
            </div>
            </div>
            <div className = "right"> 
               <div className="login">
                <div className="heading">
                <h2>Sign In</h2> 
                <p>Sign in to your account</p> 
                </div>
                <LoginBox/>
                <div className = "container">
                <div className="field">
                <label >Email address</label>
                <br/>
                <input type="text"/>
                </div>
                <div className="field">
                <label >Password</label>
                <br/>
                <input type="password"/>
                </div>
                <a className="forgot">Forgot Password?</a>
                <Link to="/home"><button>Sign In</button></Link>
                </div>
                <div className="register">
                <p><span className="account">Don't have an account? </span><span className="registerColor">Register here</span></p>
                </div>
               </div>
            </div>
        </div>
    )
}
export default Main; 

