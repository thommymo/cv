import React, { Component } from 'react'
import styled from 'styled-components'
import { black, white, secondary } from '../utils/colors'
import {
  Link
} from 'react-router-dom'

/*class LifeLapDetail extends Component {
  render(){
    return(

    )
  }
}*/

class LifeLapMoreButton extends Component {
  showMore(){
    console.log("hi there")
  }

  render(){
    return(
        <GhostbuttonWhite onClick={this.showMore} to="/chapter/">
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





/*const Button = styled.Link`
  color: ${white};
  background-color: ${secondary};
  font-size: 1em;
  margin-top: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${white};
  border-radius: 3px;
`*/

export default LifeLapMoreButton;
