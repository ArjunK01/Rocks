import React from "react";
import "../Styles/Rock.css";

const Rock = props => {
  return (
    <div className="rock">
      <div
        className="rock-image"
        style={{
          backgroundImage: `url("https://images.thdstatic.com/productImages/94af8836-0338-4802-914e-04cc71e562ad/svn/backyard-x-scapes-fake-rocks-hdd-rof-rocsb-64_1000.jpg")`,
          backgroundSize: "cover"
        }}
      ></div>
      <div className="rock-info">
        <div className="info-top">
          <div className="type">Type</div>
          <div className="description">This is the rock desc</div>
        </div>
        <div className="row">
          <div className="weight">
            Weight: 12<span>lbs</span>
          </div>
          <div className="origin">Origin: origin</div>
        </div>
        <div
          className="sell-btn"
          style={{ visibility: props.cart ? "hidden" : "visible" }}
        >
          {props.store ? "Add to Cart" : "Sell"}
        </div>
      </div>
    </div>
  );
};

export default Rock;
