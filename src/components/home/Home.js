import react from 'react'
import "./home.css"
import SideBar from "../sidebar/SideBar.js"

const Home= () =>{
    return(
        <div className="home">
            <SideBar/>
            <div className="homeContent">
            hello
            </div>
        </div>
    );
}

export default Home; 
