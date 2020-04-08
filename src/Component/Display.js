import React from 'react';
import '../App.css';

const Display = (props) => {
  return (
    <div className="display">
      <input type="text" id="display" value={props.text} readOnly />
    </div>
  );
}

export default Display;