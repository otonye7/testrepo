import * as React from 'react';
import LandingPage from "../../assets/Landingpageimage.svg";
import "./card.css"


const BasicCard = () => {
  return (
    <div className='card-container'>
         <img src={LandingPage} alt="" />
    </div>
  );
}

export default BasicCard