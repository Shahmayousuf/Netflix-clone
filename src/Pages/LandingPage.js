import React from "react";
import './Landingpage.css'
import NavBar from "../Components/NavBar/NavBar";
const LandingPage = () => {
  return (
    
   
    <div className="banner">

      <div className="content">
        <h1>Unlimited movies, TV<br></br> shows,and more.</h1>
        <p className="para">Watch anywhere.Cancel anytime</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership{" "}
        </p>
        <div className="formdiv">
        <form>
            <input type="email" placeholder="Email address"></input><button >TRY 30 DAYS FREE</button>
        </form>
        </div>
        <p>only new members are eligible for this offer</p>
       
      </div>

    </div>
    
  );
};

export default LandingPage;
