import React, { Component } from 'react';

const Action = (props) => {
  return (
    <div className="act">
        <button
          onClick={props.handlePick}
          disabled={!props.hasOptions}
          >
          What should I do?
          </button>
    </div>
  );
  
}

export default Action;
