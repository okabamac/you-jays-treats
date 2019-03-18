import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
     <i class="fa fa-angle-double-right"></i>
    </div>
  );
}

export default RightArrow;