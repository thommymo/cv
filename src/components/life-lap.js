import React, { Component } from 'react'
import styled from 'styled-components'
import { white, secondary } from '../utils/colors'

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
      <Button onClick={this.showMore}>
        {this.props.children}
      </Button>
    )
  }
}

const Button = styled.button`
  color: ${white};
  background-color: ${secondary};
  font-size: 1em;
  margin-top: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${white};
  border-radius: 3px;
`

export default LifeLapMoreButton;