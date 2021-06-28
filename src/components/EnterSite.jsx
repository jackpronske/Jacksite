import React from 'react';

const EnterSite = (props) => (
  <div className="enter-site-container">
    <div className="welcome-track">
      <div className="welcome-slider">welcome to jack pronske</div>
    </div>
    <div
      className="enter-site-button"
      onClick={() => props.showHide('showEnterSite')}
    ></div>
  </div>
);

export default EnterSite;
