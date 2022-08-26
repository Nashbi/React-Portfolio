import React from "react";
import '../App.css';
import abstract from "../abs.jpeg";
import profilePic from "../Nash (1).png";
import reactPic from "../react.png";
import javaScript1 from "../js.png";
import css3 from "../css3.png";
import bootstrap1 from "../bootstrap.png";
import html5 from "../html.png";
import mongoDb1 from "../mongo.png";



function Header() {
  return (
    <div>
       <img id="abstract" src={abstract} />
       <img id="NashPic" src={profilePic} />
       <h1 id="name1"> Nashbi Grand-Jean </h1>
       <h1 id="name2"> Software Engineer </h1>
       <img id="reactPic" src={reactPic} />
       <img id="JavaScript" src={javaScript1} />
       <img id="css3" src={css3} />
       <img id="bootstrap1" src={bootstrap1} />
       <img id="html5" src={html5} />
       <img id="mongoDb1" src={mongoDb1} />








    </div>

  )};

  export default Header;
