import react from 'react'
import "./home.css"
import SideBar from "../sidebar/SideBar.js"
import bell from "../../images/bell.svg"
import user from "../../images/user.svg"
import excel from "../../images/excel.svg"
import uploadFile from "../../images/uploadFile.svg"
import {Link } from "react-router-dom" 

const Home= () =>{
    return(
        <div className="home">
            <SideBar/>
            <div className="homeContent">
                <div className="navbar">
                    <h2>Upload CSV</h2>
                <div className= "images">
                    <img src={bell}/>
                    <img src={user}/>                    
                </div>
                </div>
            <div className="uploading">
                <div className="fileUpload">
                    <img src = {excel}/><br/>
                    <p>Drop you excel sheet here or <span>browse</span></p>
                </div>
                <button><img src={uploadFile}/>Upload</button>
            </div>
            
            </div>
        </div>
    );
}

export default Home; 
