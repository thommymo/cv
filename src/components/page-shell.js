import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageShell = Page => {
  return props =>
  <ReactCSSTransitionGroup
    transitionAppear={true}
    transitionAppearTimeout={1000}
    transitionEnterTimeout={100}
    transitionLeave={true}
    transitionLeaveTimeout={1000}
    transitionName="SlideIn"
  >
    <Page {...props} />
  </ReactCSSTransitionGroup>;
};

export default PageShell;
