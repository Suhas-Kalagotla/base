import react from 'react'
import apple from "../../images/apple.svg"
import google from "../../images/google.jpeg"
import "./loginBox.css"

const LoginBox = () =>{
    return(
        <div className="loginContainer">
        <div className="loginBox">
            <img src={google}/> 
            <p> sign in with Google</p>
        </div>
        <div className = "loginBox">
            <img id="apple"src ={apple}/>
            <p> sign in with Apple</p>
        </div>
        </div>
    );
}

export default LoginBox; 
