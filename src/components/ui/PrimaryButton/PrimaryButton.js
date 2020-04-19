import React from 'react';
import './PrimaryButton.scss';

const PrimaryButton = props => {
  return (
    <button className="primary-button">
      {props.children}
    </button>
  );
};

export default PrimaryButton;