import React, { Component } from 'react'
import CVEntryDetailViewWithData from './components/cv-entry-detail-view'
import { CurriculumVitae } from './components/curriculum-vitae'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { timeout } from './utils/constants'
import { primary } from './utils/colors'
import { Route, Switch, withRouter} from 'react-router-dom'
import PageNotFound from './components/page-not-found'

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
    position:absolute;
    opacity: 0;
    top:0px;
  }
  .SlideIn-appear.SlideIn-appear-active {
    position:absolute;
    opacity: 1;
    transition: opacity ${(timeout)}ms ease-out ${(timeout)}ms;
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
    transition: opacity ${(timeout)}ms ease-out ${(timeout)}ms;
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
    transition: opacity ${(timeout)}ms ease-out;
    top:0px;
  }
`

//TODO: Maybe add Redux, although this could be a bit over engineered
//TODO: Add a print version

class App extends Component {
  componentWillEnter(){
    console.log("CSSTransition")
  }
  render() {
    const timeoutTransition = { enter:(timeout*3), exit:300 }

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
            timeout={timeoutTransition}
            classNames="SlideIn"
            key={this.props.location.key}
          >
            <Switch location={this.props.location}>
              <Route exact path='/' component={CurriculumVitae} />
              <Route exact path='/:id' component={CVEntryDetailViewWithData} />
              <Route component={PageNotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
    )
  }
}

export default withRouter(App);
