import React from "react";
import { Link } from "react-router-dom";



function LandingPageButton() {
    return(
        <>
       
    
    <Link to="/Home" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px", "color": "beige"}}>
                Go To Home
            </span>
        </button>
    </Link>
    </>
    );
    
    
    
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return <div style={style}>
        
        <div style={{"font-size": "96px"}}>
            Yaay
        </div>
        
        <div style={{"font-size": "36px"}}>
            Success
        </div>
        <br />
        <LandingPageButton />
    </div>
}

function LandingFrame() {
    const style = {
        "background-image": `url("https://tse1.mm.bing.net/th?id=OIP.QEpbD01o0YO26tbYgzcbTwHaDe&pid=Api&P=0&w=340&h=159")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}>
        
        <LandingFrameMessage/>
    </div>
}
function Result() {
    return <div>
        <LandingFrame />
    </div>
}
export default Result