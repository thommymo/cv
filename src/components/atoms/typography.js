import { media, print } from "../../utils/breakpoints"
import styled, { css } from "styled-components"

/*
  Helpers
*/

const fontSize = css`
  ${media.desktop`font-size: ${props =>
    props.theme.fontSize[props.type].desktop};`}
  ${media.tablet`font-size: ${props =>
    props.theme.fontSize[props.type].tablet};`}
  ${media.phone`font-size: ${props => props.theme.fontSize[props.type].phone};`}
  ${print.paper`font-size: ${props => props.theme.fontSize[props.type].print};`}
`
const lineHeight = css`
  ${media.desktop`line-height: ${props =>
    props.theme.lineHeight[props.type].desktop};`}
  ${media.tablet`line-height: ${props =>
    props.theme.lineHeight[props.type].tablet};`}
  ${media.phone`line-height: ${props =>
    props.theme.lineHeight[props.type].phone};`}
  ${print.paper`line-height: ${props =>
    props.theme.lineHeight[props.type].print};`}
`
const coloredLink = css`
  & a {
    background-image: -webkit-linear-gradient(
      165deg,
      ${props => props.theme.colors.blue} 20%,
      ${props => props.theme.colors.violet} 70%
    ); /* For Chrome and Safari */
    background-image: linear-gradient(
      165deg,
      ${props => props.theme.colors.blue} 20%,
      ${props => props.theme.colors.violet} 70%
    ); /* Standard syntax; must be last */
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    display: inline-block;
    ${print.paper`display: inline; color:${props =>
      props.theme.colors
        .black}; background-image:none;`} @media all and (-ms-high-contrast: none),
      (-ms-high-contrast: active) {
      display: inline;
      color: ${props => props.theme.colors.blue};
      background-image: none;
    }
  }
`
/*
  Typography
*/

export const H1 = styled.h1.attrs({ type: "h1" })`
  font-weight:400;
  ${fontSize}
  ${lineHeight}
  border-bottom:solid 5px ${props => props.theme.colors.black};
  border-left:solid 8px transparent;
  display: inline-block;
  ${print.paper`color:${props => props.theme.colors.black};`}
  ${print.paper`border-bottom:solid 3px ${props => props.theme.colors.black};`}
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    color:${props => props.theme.colors.black};
    background-image:none;
  }
`
export const H2 = styled.h2.attrs({ type: "h2" })`
  font-weight:400;
  ${fontSize}
  ${lineHeight}
  ${print.paper`color:${props => props.theme.colors.black};`}
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    color:${props => props.theme.colors.black};
    background-image:none;
  }
`
export const H2Centered = H2.extend`
  text-align: center;
`
export const H3 = styled.h3.attrs({ type: "h3" })`
  font-weight:400;
  ${fontSize}
  ${lineHeight}
  ${coloredLink}
`
export const H3Capitals = H3.extend`
  text-transform: uppercase;
`
export const H4 = styled.h4.attrs({ type: "h4" })`
  font-weight: 400;
  ${fontSize} ${lineHeight};
`
export const H4Capitals = H4.extend`
  text-transform: uppercase;
`
export const Small = styled.small.attrs({ type: "small" })`
  ${fontSize} ${lineHeight};
`
export const P = styled.p.attrs({ type: "p" })`
  ${fontSize}
  ${lineHeight}
  ${coloredLink}
`
export const PCapitals = styled.p`
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  min-height: 50px;
`
export const InnerHTML = styled.span`
& p {
    ${media.desktop`font-size: ${props => props.theme.fontSize.p.desktop};`}
    ${media.tablet`font-size: ${props => props.theme.fontSize.p.tablet};`}
    ${media.phone`font-size: ${props => props.theme.fontSize.p.phone};`}
    ${media.desktop`line-height: ${props => props.theme.lineHeight.p.desktop};`}
    ${media.tablet`line-height: ${props => props.theme.lineHeight.p.tablet};`}
    ${media.phone`line-height: ${props => props.theme.lineHeight.p.phone};`}
    ${coloredLink}
  }
}
& h3 {
  font-weight:400;
  ${media.desktop`font-size: ${props => props.theme.fontSize.h3.desktop};`}
  ${media.tablet`font-size: ${props => props.theme.fontSize.h3.tablet};`}
  ${media.phone`font-size: ${props => props.theme.fontSize.h3.phone};`}
  ${media.desktop`line-height: ${props => props.theme.lineHeight.h3.desktop};`}
  ${media.tablet`line-height: ${props => props.theme.lineHeight.h3.tablet};`}
  ${media.phone`line-height: ${props => props.theme.lineHeight.h3.phone};`}
}
`
export const APrintOnly = styled.a`
  visibility: hidden;
  ${print.paper`
    visibility:visible;
    margin-left:-10px;
    text-decoration: underline;
    font-weight: 400;
    font-size: 0.9em;
    padding-right: 18px;
    color:${props => props.theme.colors.violet};`};
`
