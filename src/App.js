import React, { Component } from 'react'
import { ShellCVEntryWithData } from './components/data/cv-entry-detail'
import { ShellCVEntriesWithData } from './components/data/cv-entries'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { timeout, timeoutTransition } from './utils/constants'
import { white } from './utils/colors'
import { Route, Switch, withRouter} from 'react-router-dom'
import PageNotFound from './components/molecules/page-not-found'
import PageShell from './components/templates/page-shell'

//TODO: injectGlobal might has to be moved somewhere else

import { injectGlobal } from 'styled-components';

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
            appear={true}
            timeout={timeoutTransition}
            classNames="SlideIn"
            key={this.props.location.key}
            unmountOnExit={true}
            onExited={() => window.scrollTo(0,0)}
          >
            <Switch location={this.props.location}>
              <Route exact path='/'><Application/></Route>
              <Route exact path='/home' ><Application/></Route>
              <Route exact path='/aboutme' ><AboutMe/></Route>
              <Route exact path='/cv' ><ShellCVEntriesWithData/></Route>
              <Route exact path='/:something/:id/'><ShellCVEntryWithData {...this.props}/></Route>
              <Route><PageNotFound/></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
    )
  }
}

const Application = () => (
  <PageShell withMainNavigation={true}><div>Something about this Application</div></PageShell>
)

const AboutMe = () => (
  <PageShell withMainNavigation={true}><div>Something AboutMe</div></PageShell>
)

export default withRouter(App);
