import React from 'react';

const EnterSite = (props) => (
  <div>
    <div>
      <div>welcome to jack pronske</div>
    </div>
    <div
      onClick={() => props.showHide('showEnterSite')}
    >enter site</div>
  </div>
);

export default EnterSite;
