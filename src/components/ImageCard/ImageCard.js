import React from "react";
import "./ImageCard.css";

const ImageCard = (props) => 
(< div role="img" className="click-item" arial-label="click-item" onClick={() => props.clickImageEvent(props.image.id)} >
    <img alt={props.image.id} src={props.image.image} />
  </div >
  );
export default ImageCard;
