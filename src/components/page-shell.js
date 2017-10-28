import React, { Component } from 'react';
import AnimatedWrapper from '../components/animated-wrapper'
import { Link } from 'react-router-dom'

export const PageShell = ({ children, ...props }) => (
  <div className="TopBar">
    <Link to="/">Home</Link>
    <Link to="/404">Subpage</Link>
    <Link to="/chapter">Chapter</Link>
  </div>
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="SlideIn"
  >
    {children}
  </CSSTransition>
);
