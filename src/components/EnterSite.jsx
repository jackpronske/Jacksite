import React from 'react';

const EnterSite = (props) => (
  <div>
    <div id="welcome-track">
      <div id="welcome-slider">welcome to jack pronske</div>
    </div>
    <div
      id="enter-site"
      onClick={() => props.showHide('showEnterSite')}
    >enter site</div>
  </div>
);

export default EnterSite;
