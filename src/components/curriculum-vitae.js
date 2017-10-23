import React, { Component } from 'react'
import FullWithImage from '../components/full-with-image'

class CurriculumVitae extends Component {
  render() {
    return (
      <div>
        <p>Hello World</p>
        <FullWithImage assetType=".jpg" assetName="thomas_moser_3" altText="This is Thomas"/>
      </div>
    )
  }
}

export default CurriculumVitae
