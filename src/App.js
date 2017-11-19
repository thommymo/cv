import React, { Component } from 'react'
import { ShellCVEntryWithData } from './components/data/cv-entry-detail'
import { ShellCVEntriesWithData } from './components/data/cv-entries'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { timeoutTransition } from './utils/constants'
import { Route, Switch, withRouter} from 'react-router-dom'
import PageNotFound from './components/pages/page-not-found'
import { AboutMe } from './components/pages/aboutme'
import ThemeProvider from 'styled-components'
import { theme } from './utils/theme'
import './utils/global-css'

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
            <Route exact path='/'>
              <AboutMe/>
            </Route>
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

export default withRouter(App)
