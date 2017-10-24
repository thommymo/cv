import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/*  TODO:
 *  * make assetDirectory global
 *  * make assetDirectory relative with storybook still working properly
 *  * FullWithImage should be a stateless component (since it has no state)
 *  * Image should always be 100% width
 */

class FullWithImage extends Component {
  render() {
    const { assetName, assetType, altText} = this.props
    const assetDirectory = "http://localhost:3000/assets/images/"
    const breakPoints = [[false, 768], [769, 1024], [1025, false]]
    const assetPostFix = [["-375w", "-750w"], ["-750w", "-1500w"], ["-1000w", "-2000w"]]

    return (
      <picture>
        { breakPoints.map((currentValue, index) => (
          <source key={index}
            media={`screen
              ${currentValue[0] ? `and (min-width:${currentValue[0]}px)` : ""}
              ${currentValue[1] ? `and (max-width:${currentValue[1]}px)` : ""}
              `}
            srcSet={`
              ${assetDirectory}${assetName}${assetPostFix[index][0]}${assetType} 1x,
              ${assetDirectory}${assetName}${assetPostFix[index][1]}${assetType} 2x,
            `}/>
        ))}
        <StyledImage src={`${assetDirectory}${assetName}${assetPostFix[1][0]}${assetType}`} alt={altText}/>
      </picture>
    )
  }
}

FullWithImage.propTypes = {
  assetType: PropTypes.oneOf(['.jpg', '.png']).isRequired,
  altText: PropTypes.string.isRequired,
  assetName: PropTypes.string.isRequired,
}

const StyledImage = styled.img`
  width:100%;
`

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
