import { media } from '../../utils/breakpoints'
import styled, { css } from 'styled-components'

/*
  Helpers
*/

const fontSize = css`
  ${media.desktop`font-size: ${props => props.theme.fontSize[props.type].desktop};`}
  ${media.tablet`font-size: ${props => props.theme.fontSize[props.type].tablet};`}
  ${media.phone`font-size: ${props => props.theme.fontSize[props.type].phone};`}
`
const lineHeight = css`
  ${media.desktop`line-height: ${props => props.theme.lineHeight[props.type].desktop};`}
  ${media.tablet`line-height: ${props => props.theme.lineHeight[props.type].tablet};`}
  ${media.phone`line-height: ${props => props.theme.lineHeight[props.type].phone};`}
`
const coloredLink = css`
  & a {
    background-image: -webkit-linear-gradient(165deg, ${props => props.theme.colors.blue} 20%, ${props => props.theme.colors.violet} 70%); /* For Chrome and Safari */
    background-image:         linear-gradient(165deg, ${props => props.theme.colors.blue} 20%, ${props => props.theme.colors.violet} 70%); /* Standard syntax; must be last */
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    display: inline-block;
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
`
export const H2 = styled.h2.attrs({ type: 'h2' })`
  font-weight:400;
  ${fontSize}
  ${lineHeight}
  display: inline-block;
`
export const H3 = styled.h3.attrs({ type: 'h3' })`
  font-weight:400;
  ${fontSize}
  ${lineHeight}
  ${coloredLink}
`
export const H3Capitals = H3.extend`
  text-transform: uppercase;
`
export const H4 = styled.h4.attrs({ type: 'h4' })`
  font-weight:400;
  ${fontSize}
  ${lineHeight}
`
export const H4Capitals = H4.extend`
  text-transform: uppercase;
`
export const Small = styled.small.attrs({ type: 'small' })`
  ${fontSize}
  ${lineHeight}
`
export const P = styled.p.attrs({ type: 'p' })`
  ${fontSize}
  ${lineHeight}
  ${coloredLink}
`
export const PCapitals = styled.p`
  text-transform: uppercase;
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
