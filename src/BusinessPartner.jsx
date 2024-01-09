import React from "react";
import "./businessPartner.css";
import aws from "./images/aws.png";
import deccan from "./images/deccan-chronicles.png";
import econ from "./images/economics-times.png";
import eter from "./images/enterprenure.png";
import theKen from "./images/the-ken.png";
import yahoo from "./images/yahoo.png";
import yourStory from "./images/yourstory.png";
import indianExpress from "./images/indian-express.png";
import theHindu from "./images/the-hindu.png";

export default function BusinessPartner() {
  return (
    <div className="b-partner">
        <div className="b-heading">
            <h3>Our Business Partners</h3>
        </div>
      <div className="b-part-container">
        <img src={aws} alt="" />
        <img src={deccan} alt="" />
        <img src={econ} alt="" />
        <img src={eter} alt="" />
        <img src={theKen} alt="" />
        <img src={yahoo} alt="" />
        <img src={yourStory} alt="" />
        <img src={indianExpress} alt="" />
        <img src={theHindu} alt="" />
      </div>
    </div>
  );
}
