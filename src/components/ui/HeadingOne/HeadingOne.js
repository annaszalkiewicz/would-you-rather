import React from 'react';
import './HeadingOne.scss';

const HeadingOne = props => {
  return (
    <h1 className="heading-one"><span className="question-mark-rotated" style={props.style}>?</span> Would You Rather ?</h1>
  );
};

export default HeadingOne;