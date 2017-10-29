import React, { Component } from "react"
import ReactTransitionGroup from 'react-transition-group'
import {timeout} from '../utils/constants'
import { white, primary, secondary } from '../utils/colors'
import styled from 'styled-components'


export default class Chapter extends Component {
  componentDidMount(){
    //TODO: Find a better solution for this.
    //This could maybe be a solution: https://reactcommunity.org/react-transition-group/#Transition-prop-addEndListener
    setTimeout(()=>window.scrollTo(0, 0), `${timeout}`)
  }

   render() {
    return (
     <BDiv className="page">
       <h1>Chapter</h1>
       <p>Hello from the Chapter page!</p>
     </BDiv>
    )
   }
}
const BDiv = styled.div`
  color:${white};
`
