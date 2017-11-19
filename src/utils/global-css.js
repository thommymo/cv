import { injectGlobal } from 'styled-components';
import { timeout } from './constants'
import { media } from './breakpoints'

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
    & a {
      background-image: -webkit-linear-gradient(165deg, blue 20%,red 70%); /* For Chrome and Safari */
      background-image:         linear-gradient(165deg, blue 20%,red 70%); /* Standard syntax; must be last */
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      display: inline-block;
    }
    & p {
        ${media.desktop`font-size: 1.4em; line-height: 1.4em; `}
        ${media.tablet`font-size: 1.3em; line-height: 1.3em; `}
        ${media.phone`font-size: 1.25em; line-height: 1.3em; `}
      }
    }
    & h3 {
      font-weight:400;
      ${media.desktop`font-size: 1.75em;`}
      ${media.tablet`font-size: 1.5em;`}
      ${media.phone`font-size: 1.375em`}
      ${media.desktop`line-height: 1.7em`}
      ${media.tablet`line-height: 1.4em`}
      ${media.phone`line-height: 1.30em`}
    }
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
