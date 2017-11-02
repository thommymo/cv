import React from "react"
import { media, sizes, imagesizes } from '../utils/breakpoints'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { timeoutTransition } from '../utils/constants'
import { loadingIcon } from '../utils/icons'



/*
  Typography
*/

export const H1 = styled.h1`
  font-weight:600;
  ${media.desktop`font-size: 3em;`}
  ${media.tablet`font-size: 2.5em;`}
  ${media.phone`font-size: 2em;`}
  ${media.desktop`line-height: 1.05em;`}
  ${media.tablet`line-height: 1.25em;`}
  ${media.phone`line-height: 1.25em;`}
`
export const H2 = styled.h2`
  font-weight:600;
  ${media.desktop`font-size: 2.25em;`}
  ${media.tablet`font-size: 2em;`}
  ${media.phone`font-size: 1.625em;`}
  ${media.desktop`line-height: 1.25em`}
  ${media.tablet`line-height: 1.25em`}
  ${media.phone`line-height: 1.15384615em;`}
`
export const H3 = styled.h3`
  font-weight:600;
  ${media.desktop`font-size: 1.75em;`}
  ${media.tablet`font-size: 1.5em;`}
  ${media.phone`font-size: 1.375em`}
  ${media.desktop`line-height: 1.25em`}
  ${media.tablet`line-height: 1.25em`}
  ${media.phone`line-height: 1.13636364em`}
`
export const H4 = styled.h4`
  font-weight:600;
  ${media.desktop`font-size: 1.125em`}
  ${media.tablet`font-size: 1.125em`}
  ${media.phone`font-size: 1.125em`}
  ${media.desktop`line-height: 1.22222222em`}
  ${media.tablet`line-height: 1.22222222em`}
  ${media.phone`line-height: 1.11111111em`}
`
export const P = styled.p`
  ${media.desktop`font-size: 1em;`}
  ${media.tablet`font-size: 1em;`}
  ${media.phone`font-size: 1em;`}
  ${media.desktop`line-height: 1.22222222em`}
  ${media.tablet`line-height: 1.22222222em`}
  ${media.phone`line-height: 1.11111111em`}
`
export const UL = styled.ul`
  ${media.desktop`font-size: 1em;`}
  ${media.tablet`font-size: 1em;`}
  ${media.phone`font-size: 1em;`}
  ${media.desktop`line-height: 1.22222222em`}
  ${media.tablet`line-height: 1.22222222em`}
  ${media.phone`line-height: 1.11111111em`}
`
export const LI = styled.li`
  ${media.desktop`font-size: 1em;`}
  ${media.tablet`font-size: 1em;`}
  ${media.phone`font-size: 1em;`}
  ${media.desktop`line-height: 1.22222222em`}
  ${media.tablet`line-height: 1.22222222em`}
  ${media.phone`line-height: 1.11111111em`}
`

/*
  Links and Buttons
*/

export const Ghostbutton = styled(Link)`
  border:1px solid;
  padding: 5px 10px 5px 10px;
  width: auto;
  float:none;
  text-decoration: none;
`;

/*
  Loading Animations
*/

export const Loading = () => (
    <CSSTransition
      in
      appear={true}
      timeout={timeoutTransition}
      classNames="SlideIn"
      unmountOnExit={true}
    >
      <P><img src={loadingIcon}/></P>
    </CSSTransition>
)

/*
  Images
*/

export const FullWithImage = (props) => {
  //https://media.graphcms.com/[options]/[File Handle]
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

const Img = styled.img`
  width:100%;
`
