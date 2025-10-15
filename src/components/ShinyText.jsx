import React from 'react';
import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const style = { animationDuration: `${speed}s` };

  return (
    <div className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`} style={style}>
      {text}
    </div>
  );
};

export default ShinyText;
