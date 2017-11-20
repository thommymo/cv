import { injectGlobal } from 'styled-components';
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
    background-color: white; /*{white}*/
  }

  .ImageFadeIn-enter {
    opacity: 0;
  }
  .ImageFadeIn-enter.ImageFadeIn-enter-active {
    opacity: 1;
    transition: opacity ${(timeout*2)}ms cubic-bezier(.22,.07,.3,1) ${(timeout*2)}ms;
  }
  .ImageFadeIn-exit {
    opacity: 1;
  }
  .ImageFadeIn-exit.ImageFadeIn-exit-active {
    opacity: 0;
    transition: opacity ${(timeout*3)}ms cubic-bezier(.22,.07,.3,1) ${(timeout*2)}ms;
  }
  .FadeIn-appear {
    opacity: 0;
  }
  .FadeIn-appear.FadeIn-appear-active {
    opacity: 1;
    transition: opacity ${(timeout*3)}ms cubic-bezier(.22,.07,.3,1) ${(timeout*2)}ms;
  }
  .FadeIn-enter {
    opacity: 0;
  }
  .FadeIn-enter.FadeIn-enter-active {
    opacity: 1;
    transition: opacity ${(timeout*3)}ms cubic-bezier(.22,.07,.3,1) ${(timeout*2)}ms;
  }
  .SlideIn-appear {
    opacity: 0;
  }
  .SlideIn-appear.SlideIn-appear-active {
    opacity: 1;
    transition: opacity ${(timeout*3)}ms cubic-bezier(.22,.07,.3,1) ${(timeout*2)}ms;
  }
  .SlideIn-enter {
    opacity: 0;
  }
  .SlideIn-enter.SlideIn-enter-active {
    opacity: 1;
    transition: opacity ${(timeout*3)}ms cubic-bezier(.22,.07,.3,1) ${(timeout*2)}ms;
  }
  .SlideIn-exit {
    opacity: 1;
  }
  .SlideIn-exit.SlideIn-exit-active {
    opacity: 0;
    transition: opacity ${(timeout*1.5)}ms cubic-bezier(.22,.07,.3,1);
  }
`
