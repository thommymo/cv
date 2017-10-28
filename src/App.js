import React, { Component } from 'react'
import FullWithImage from './components/full-with-image'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { white, primary } from './utils/colors'
import { StyledH1, StyledP } from './components/styled-atoms'
import { TimelineContentWithData } from './components/content/timeline-content'
import Chapter from './components/chapter'
import { CurriculumVitae } from './components/curriculum-vitae'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Route, Link, Redirect, Switch, withRouter} from 'react-router-dom'
import FourOoFour from './components/404'

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
    position: absolute;
    opacity: 0;
    top:21px;
  }
  .SlideIn-appear.SlideIn-appear-active {
    position: absolute;
    opacity: 1;
    transition: all 1s ease-out 200ms;
    top:21px;
  }
  .SlideIn-enter {
    position: absolute;
    opacity: 0;
    top:54px;
  }
  .SlideIn-enter.SlideIn-enter-active {
    position: absolute;
    opacity: 1;
    transition: all 1s ease-out 200ms;
    top:21px;
  }
  .SlideIn-exit {
    position: absolute;
    opacity: 1;
    top:21px;
  }
  .SlideIn-exit.SlideIn-exit-active {
    position: absolute;
    opacity: 0;
    transition: all 200ms ease-out;
    top:54px;
  }
`

//TODO: Maybe add Redux, although this could be a bit over engineered
//TODO: Add a print version

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TopBar">
          <Link to="/">Home</Link>
          <Link to="/404">Subpage</Link>
          <Link to="/chapter">Chapter</Link>
        </div>
        <TransitionGroup
          appear={true}
        >
          <CSSTransition
            timeout={200,2000}
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
      </div>
    );
  }
}

export default withRouter(App);
