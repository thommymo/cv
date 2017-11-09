import React from 'react'
import { sizes, imagesizes } from '../../utils/breakpoints'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { timeoutTransition } from '../../utils/constants'
import { loadingIcon } from '../../utils/icons'

/*
 TODO: Add loading of image
 */


/*
  Images
*/

export const FullWithImage = (props) => {
  //https://media.graphcms.com/[options]/[File Handle]
  const baseurl = "https://media.graphcms.com/"
  const handle = props.handle
  return (
    <WithBorder color={props.color}>
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
    </WithBorder>
  )
}

const Img = styled.img`
  width:100%;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.2), 0 6px 45px 0 rgba(0, 0, 0, 0.19);
  position:relative;

`
const WithBorder = styled.div`
  position:relative;
  &::before {
    content:'';
    width: 0;
    height: 0;
    line-height: 0;
    border-right: 120px solid transparent;
    border-top: 120px solid ${props => props.color};
    top: -40px;
    left: -40px;
    position: absolute;
    z-index: 10000;
  }
  &::after {
    content:'';
    width: 0;
    height: 0;
    line-height: 0;
    border-left: 120px solid transparent;
    border-bottom: 120px solid ${props => props.color};
    bottom: -40px;
    right: -40px;
    position: absolute;
    z-index: 10000;
  }
`
