import React, { Component } from 'react'
import styled from 'styled-components'
import { black, white } from '../utils/colors'
import {
  Link
} from 'react-router-dom'

class LifeLapMoreButton extends Component {
  render(){
    return(
        <GhostbuttonWhite to="/chapter/">
          {this.props.children}
        </GhostbuttonWhite>
    )
  }
}

const Ghostbutton = styled(Link)`
  border:1px solid;
  padding: 5px 10px 5px 10px;
  width: auto;
  float:none;
  text-decoration: none;
  color:${black};
  border-color:${black};
`;

const GhostbuttonWhite = Ghostbutton.extend`
  color:${white};
  border-color:${white};
`

export default LifeLapMoreButton;
