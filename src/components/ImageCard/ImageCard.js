import React from "react";
import "./ImageCard.css";

const ImageCard = props => 
(< div role="img" className="click-item" arial-label="click-item" onClick={() => props.clickImageEvent(props.id)} >
    <img alt={props.id} src={props.image} />
  </div >
  );
export default ImageCard;
