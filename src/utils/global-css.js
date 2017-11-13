import { injectGlobal } from 'styled-components';
import { white } from './colors'
import { timeout } from './constants'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:600,400,200');

  body:before {
    height: 100vh;
    display:block;
  }
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 200;
    font-size: 100%;
    height: 100%;
    background-color: ${white};
  }

  .ImageFadeIn-enter {
    opacity: 0;
  }
  .ImageFadeIn-enter.ImageFadeIn-enter-active {
    opacity: 1;
    transition: opacity ${(timeout*2)}ms ease-out;
  }
  .ImageFadeIn-exit {
    opacity: 1;
  }
  .ImageFadeIn-exit.ImageFadeIn-exit-active {
    opacity: 0;
    transition: opacity ${(timeout*2)}ms ease-out;
  }
  .FadeIn-appear {
    opacity: 0;
  }
  .FadeIn-appear.FadeIn-appear-active {
    opacity: 1;
    transition: opacity ${(timeout*2)}ms ease-out ${(timeout)}ms;
  }
  .FadeIn-enter {
    opacity: 0;
  }
  .FadeIn-enter.FadeIn-enter-active {
    opacity: 1;
    transition: opacity ${(timeout*2)}ms ease-out ${(timeout)}ms;
  }
  .SlideIn-appear {
    opacity: 0;
    transform: translateY(10px);
  }
  .SlideIn-appear.SlideIn-appear-active {
    opacity: 1;
    transform: translateY(0px);
    transition: all ${(timeout*2)}ms ease-out ${(timeout*1.5)}ms;
  }
  .SlideIn-enter {
    opacity: 0;
    transform: translateY(10px);
  }
  .SlideIn-enter.SlideIn-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: all ${(timeout*2)}ms ease-out ${(timeout*1.5)}ms;
  }
  .SlideIn-exit {
    transform: translateY(0px);
    opacity: 1;
  }
  .SlideIn-exit.SlideIn-exit-active {
    opacity: 0;
    transform: translateY(20px);
    transition: all ${(timeout)}ms ease-out;
  }
`
