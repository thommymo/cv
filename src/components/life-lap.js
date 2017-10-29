import React, { Component } from 'react'
import { white } from '../utils/colors'
import { Ghostbutton } from '../components/styled-atoms'

class LifeLapMoreButton extends Component {
  render(){
    return(
        <GhostbuttonWhite to="/chapter/">
          {this.props.children}
        </GhostbuttonWhite>
    )
  }
}

const GhostbuttonWhite = Ghostbutton.extend`
  color:${white};
  border-color:${white};
`

export default LifeLapMoreButton;
