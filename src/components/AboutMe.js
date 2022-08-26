import React from "react";
import '../App.css';
import nashin from "../nashin.jpeg";



function aboutMe() {
  return (
    <div id="#aboutMe">
        <h1 id="AboutNashbi"> <br></br> About Me </h1>
        <p id="paragraph">
            <br></br>Nashbi Grand-Jean is a software engineer located in Atlanta, Georgia. <br></br> He's been building websites for many years
            but most recently acquired a certification in full-stack engineering from the Georgia Institute of Technology.
        </p>
        <img id="nashin" src={nashin} />
    </div>

  )};

  export default aboutMe;
