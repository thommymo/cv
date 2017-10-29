import React, { Component } from 'react'
import FullWithImage from './components/full-with-image'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { white, primary, secondary } from './utils/colors'
import { StyledH1, StyledP } from './components/styled-atoms'
import { TimelineContentWithData } from './components/content/timeline-content'
import Chapter from './components/chapter'
import { CurriculumVitae } from './components/curriculum-vitae'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { timeout } from './utils/constants'

import { Route, Link, Redirect, Switch, withRouter} from 'react-router-dom'
import FourOoFour from './components/404'

//TODO: injectGlobal might has to be moved somewhere else

//TODO: Aufräumen und eine saubere HTML Struktur machen.

import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Assistant');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Assistant', sans-serif;
    font-size: 100%;
    background-color: ${secondary};
  }

  .SlideIn-appear {
    position:absolute;
    opacity: 0;
    top:0px;
  }
  .SlideIn-appear.SlideIn-appear-active {
    position:absolute;
    opacity: 1;
    transition: opacity ${timeout}ms ease-out ${timeout}ms;
    top:0px;
  }
  .SlideIn-enter {
    position:absolute;
    opacity: 0;
    top:0px;
  }
  .SlideIn-enter.SlideIn-enter-active {
    position:absolute;
    opacity: 1;
    transition: opacity ${timeout}ms ease-out ${timeout}ms;
    top:0px;
  }
  .SlideIn-exit {
    position:absolute;
    opacity: 1;
    top:0px;
  }
  .SlideIn-exit.SlideIn-exit-active {
    position:absolute;
    opacity: 0;
    transition: opacity ${timeout}ms ease-out;
    top:0px;
  }
`

//TODO: Maybe add Redux, although this could be a bit over engineered
//TODO: Add a print version

class App extends Component {
  render() {
    return (
        <TransitionGroup
          appear={true}
        >
          {
            /*
            Transitions in context of routing are based on Paul Shermans
            "A shallow dive into React Router v4 Animated Transitions"
            https://medium.com/@pshrmn/a-shallow-dive-into-react-router-v4-animated-transitions-4b73f634992a
            */
          }
          <CSSTransition
            timeout={`{enter: ${timeout}, exit: ${timeout*2}}`}
            classNames="SlideIn"
            key={this.props.location.key}
          >
            <Switch location={this.props.location}>
              <Route exact path='/' component={CurriculumVitae} />
              <Route path='/404' component={FourOoFour} />
              <Route path='/chapter' component={Chapter} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
    );
  }
}

export default withRouter(App);
