import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import Register from "../components/Register";
import LogIn from "../components/LogInBtn/index";


function Landing(props) {
  return (
    <div className ="container-fluid">
      <div className="row">
        <div className ="col-md-12 text-center">
          <h1> Welcome to Verdant-Green Thumbs</h1>
                  <Register />
                  <LogIn />                  
        </div>
      </div>
      </div> 
      
  );
}


export default Landing;
