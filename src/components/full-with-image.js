import React, { Component } from 'react'
import PropTypes from 'prop-types'

/*  TODO:
 *  * My solution uses max-width (within media) for now. I think it should use min width instead.
 *  * Style image with styled-components ( import styled from 'styled-components' )
 *  * make assetDirectory global
 *  * make assetDirectory relative with storybook still working properly
 *  * FullWithImage should be a stateless component (since it has no state)
 *  * Image should always be 100% width
 */

class FullWithImage extends Component {
  render() {
    const { assetName, assetType, altText} = this.props
    const assetDirectory = "http://localhost:3000/assets/images/"
    const assetPostFix = {
      "3000":["-1000w", "-2000w"],
      "1024":["-750w", "-1500w"],
      "768":["-375 i love you w", "-750w"]
    }

    return (
      <picture>
        { Object.keys(assetPostFix).map((key, value) => (
          <source key={key} media={`(max-width:${key}px)`}
            srcSet={`
              ${assetDirectory}${assetName}${assetPostFix[key][0]}${assetType} 1x,
              ${assetDirectory}${assetName}${assetPostFix[key][1]}${assetType} 2x,
            `}/>
        ))}
        <img src={`${assetDirectory}${assetName}${assetPostFix[768][0]}${assetType}`} alt={altText}/>
      </picture>
    )
  }
}

FullWithImage.propTypes = {
  assetType: PropTypes.oneOf(['.jpg', '.png']).isRequired,
  altText: PropTypes.string.isRequired,
  assetName: PropTypes.string.isRequired,
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
