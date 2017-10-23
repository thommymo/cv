import React, { Component } from 'react'
//import styled from 'styled-components'

class FullWithImage extends Component {
  render() {
    const assetDirectory = "../assets/images/"
    const assetName = "thomas_moser_3"
    const assetPostFix = {
      "3000":["-1000w", "-2000w"],
      "1024":["-750w", "-1500w"],
      "768":["-375w", "-750w"]
    }
    console.log(assetPostFix);
    const assetType = ".jpg"
    const alt = "Das ist Thomas"
    //TODO: assetName and alt: Make this a prop later
    return (
      <picture>
        { Object.keys(assetPostFix).map((key, index) => (
          <source key={key} media={`(max-width:${key}px)`}
            srcSet={`
              ${assetDirectory}${assetName}${assetPostFix[key][0]}${assetType} 1x,
              ${assetDirectory}${assetName}${assetPostFix[key][1]}${assetType} 2x,
            `}/>
        ))}
        <img src={`${assetDirectory}${assetName}${assetPostFix[768][0]}${assetType}`} alt={alt}/>
      </picture>
    )
  }
}

export default FullWithImage

/* Full Width Image Sizes
    Big   Middle  Smaller
1x: 1000  750     375
2x: 2000  1500    750

TODO: Make Grund file accordingly

smaller than 768 px
smaller than 1024 px
larger than 1024 px

Grid I'm Using: Colums: 12
Max Width for Content: 1024
Myx Width for Column: 78
Gutter Width: 8
*/
