import React, { Component } from 'react'
import FullWithImage from './components/full-with-image'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { white, primary } from './utils/colors'
import { StyledH1, StyledP } from './components/styled-atoms'
import { TimelineContentWithData } from './components/content/timeline-content'
import { Chapter } from './components/chapter'
import { CurriculumVitae } from './components/curriculum-vitae'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Route, Link } from 'react-router-dom'
import PageShell from './components/page-shell'
import { FourOoFour } from './components/404'




//TODO: injectGlobal might has to be moved somewhere else
import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Assistant');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Assistant', sans-serif;
    font-size: 100%;
  }

  .SlideIn-appear {
    transform: translateY(30px);
    opacity: 0;
  }
  .SlideIn-appear.SlideIn-appear-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 1s ease-out;
  }
  .SlideIn-exit{
      opacity: 0.5;
      transform: translateY(30px);
  }
  .SlideIn-exit.SlideIn-exit-active {
      opacity: 0.2;
      transform: translateY(-30px);

  }
  .SlideIn-leave{
      opacity: 0.5;
      transform: translateY(30px);
  }
  .SlideIn-leave.SlideIn-leave-active {
      opacity: 0.2;
      transform: translateY(-30px);

  }
`

//TODO: Maybe add Redux, although this could be a bit over engineered
//TODO: Add a print version

class App extends Component {
  render() {
    return (
        <div>
          <ul>
            <li><Link to="/"> - Home - </Link></li>
            <li><Link to="/chapter"> - Chapter - </Link></li>
            <li><Link to="/404"> - 404 - </Link></li>
          </ul>

          <TransitionGroup>
            <Route exact path="/" component={PageShell(CurriculumVitae)}/>
            <Route exact path="/chapter" component={PageShell(Chapter)} />
            <Route exact path="/404" component={PageShell(FourOoFour)} />
          </TransitionGroup>
        </div>
    );
  }
}

export default App;
