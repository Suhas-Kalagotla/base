import react from 'react'
import "./sidebar.css"
import logo from "../../images/logo.svg"
import sidebarData from "./sidebarData"

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className = "sidebarHeading">
                <img src = {logo}/>
                <h2> Base</h2>
            </div>
            <div className = "content">
                <div className="options">
                {sidebarData.map((val,key)=>{
                    return(
                       <div className="nav"> 
                        <img src = {val.src}/>
                        <p>{val.title}</p>
                        </div>
                    );
                })
                }
                </div>
            </div>
        </div>
    )    
}

export default SideBar; 
