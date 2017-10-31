import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {sizes, imagesizes} from '../utils/breakpoints'

/*  TODO:
 *  * make assetDirectory global
 *  * make assetDirectory relative with storybook still working properly
 *  * FullWithImage should be a stateless component (since it has no state)
 */

export const GraphCMSImages = (props) => {
  //https://media.graphcms.com/resize=[options]/[File Handle]
  const baseurl = "https://media.graphcms.com/"
  const handle = props.handle
  return (
    <picture>
      { Object.keys(sizes).map((label) => (

        <source key={imagesizes[label]}
          media={`screen
            ${sizes[label][0] ? `and (min-width:${sizes[label][0]}px)` : ""}
            ${sizes[label][1] ? `and (max-width:${sizes[label][1]}px)` : ""}
            `}
          srcSet={`
            ${baseurl}resize=width:${imagesizes[label]}/${handle} 1x,
            ${baseurl}resize=width:${imagesizes[label]*2}/${handle} 2x,
          `}/>
      ))}
      <Img src={`${baseurl}resize=width:20/${handle}`}/>
    </picture>
  )
}


// Iterate through the sizes and create a media template
/*export const media = Object.keys(sizes).reduce((acc, label) => {

	acc[label] = (...args) => css`
    @media screen
      ${sizes[label][0] ? `and (min-width:${sizes[label][0] / 16}em)` : ""}
      ${sizes[label][1] ? `and (max-width:${sizes[label][1] / 16}em)` : ""}
    {
			${css(...args)}
		}
	`

	return acc
}, {})





*/


class FullWithImage extends Component {
  render() {
    const { assetName, assetType, altText } = this.props
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
        <Img src={`${assetDirectory}${assetName}${assetPostFix[1][0]}${assetType}`} alt={altText}/>
      </picture>
    )
  }
}

FullWithImage.propTypes = {
  assetType: PropTypes.oneOf(['.jpg', '.png']).isRequired,
  altText: PropTypes.string.isRequired,
  assetName: PropTypes.string.isRequired,
}

const Img = styled.img`
  width:100%;
`

export default FullWithImage

/* Full Width Image Sizes
    Big   Middle  Smaller
1x: 1000  750     375
2x: 2000  1500    750

TODO: Make Grunt file according to the breakpoints in breakpoints.js

smaller than 768 px
smaller than 1024 px
larger than 1024 px

Grid I'm Using: Colums: 12
Max Width for Content: 1024
Myx Width for Column: 78
Gutter Width: 8
*/
