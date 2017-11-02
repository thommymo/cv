import React, { Component } from 'react'
import {CVEntryWithData} from './components/with-data/cv-entry-detail'
import { CVEntriesWithData } from './components/with-data/cv-entries'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { timeout } from './utils/constants'
import { primary } from './utils/colors'
import { Route, Switch, withRouter} from 'react-router-dom'
import PageNotFound from './components/page-not-found-molecule'

//TODO: injectGlobal might has to be moved somewhere else

import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:300,600');

  body:before {
    height: 100vh;
    display:block;
  }
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
    font-size: 100%;
    height: 100%;
    background-color: ${primary};

  }
  .SlideIn-appear {
    opacity: 0;
    transform: translateY(20px);
  }
  .SlideIn-appear.SlideIn-appear-active {
    opacity: 1;
    transform: translateY(0px);
    transition: all ${(timeout+600)}ms ease-out ${(timeout+300)}ms;
  }
  .SlideIn-enter {
    opacity: 0;
    transform: translateY(20px);
  }
  .SlideIn-enter.SlideIn-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: all ${(timeout+300)}ms ease-out ${(timeout+300)}ms;
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
  componentWillEnter(){
    console.log("CSSTransition")
  }
  render() {
    const timeoutTransition = { enter:1500, exit:300 }

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
          >
            <Switch location={this.props.location}>
              <Route exact path='/' component={CVEntriesWithData} />
              <Route exact path='/:id' component={CVEntryWithData} />
              <Route component={PageNotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
    )
  }
}

export default withRouter(App);
