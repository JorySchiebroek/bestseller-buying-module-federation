import React from "react";

import { Button } from '@buying/library/components/Button';

const StyleCard = ({ src, styleNumber, onClose }) => {
  return (
    <div style={{ margin: 4, padding: 8, border: '1px solid grey' }}>
      <h1>Style Card</h1>
      <p>I'm opened from: {src} with style number {String(styleNumber)}</p>
      <Button onClick={() => onClose?.()}>Close me</Button>
    </div>
  );
}

export default StyleCard;
