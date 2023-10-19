import React from "react";

const StyleCard = ({ src, styleNumber }) => {
  return (
    <div style={{ margin: 4, padding: 8, border: '1px solid grey' }}>
      <h1>Style Card</h1>
      <p>I'm opened from: {src} with style number {String(styleNumber)}</p>
    </div>
  );
}

export default StyleCard;
