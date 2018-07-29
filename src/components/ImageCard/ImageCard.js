import React from "react";
import "./ImageCard.css";

const ImageCard = props => {
  const styles = {
    backgroundImage: {
      background: props.image
    }
  }
  return (< div role="img" className="click-item" arial-label="click-item" style={styles.backgroundImage} onClick={() => props.clickImageEvent(props.id)} >
    <img alt={props.id} src={props.image} />
  </div >
  );
}
export default ImageCard;
