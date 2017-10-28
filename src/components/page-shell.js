import React, { Component } from 'react';
import AnimatedWrapper from '../components/animated-wrapper'

export const PageShell = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="SlideIn"
  >
    {children}
  </CSSTransition>
);
