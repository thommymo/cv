import { media } from '../../utils/breakpoints'
import styled from 'styled-components'

/*
  Typography
*/

export const H1 = styled.h1`
  font-weight:400;
  ${media.desktop`font-size: ${props => props.theme.fontSize.h1.desktop};`}
  ${media.tablet`font-size: ${props => props.theme.fontSize.h1.tablet};`}
  ${media.phone`font-size: ${props => props.theme.fontSize.h1.phone};`}
  ${media.desktop`line-height: ${props => props.theme.lineHeight.h1.desktop};`}
  ${media.tablet`line-height: ${props => props.theme.lineHeight.h1.tablet};`}
  ${media.phone`line-height: ${props => props.theme.lineHeight.h1.phone};`}
  border-bottom:solid 5px ${props => props.theme.colors.black};
  border-left:solid 8px transparent;
  display: inline-block;
`
export const H2 = styled.h2`
  font-weight:400;
  ${media.desktop`font-size: ${props => props.theme.fontSize.h2.desktop};`}
  ${media.tablet`font-size: ${props => props.theme.fontSize.h2.tablet};`}
  ${media.phone`font-size: ${props => props.theme.fontSize.h2.phone};`}
  ${media.desktop`line-height: ${props => props.theme.lineHeight.h2.desktop};`}
  ${media.tablet`line-height: ${props => props.theme.lineHeight.h2.tablet};`}
  ${media.phone`line-height: ${props => props.theme.lineHeight.h2.phone};`}
  display: inline-block;
`
export const H3 = styled.h3`
font-weight:400;
  ${media.desktop`font-size: ${props => props.theme.fontSize.h3.desktop};`}
  ${media.tablet`font-size: ${props => props.theme.fontSize.h3.tablet};`}
  ${media.phone`font-size: ${props => props.theme.fontSize.h3.phone};`}
  ${media.desktop`line-height: ${props => props.theme.lineHeight.h3.desktop};`}
  ${media.tablet`line-height: ${props => props.theme.lineHeight.h3.tablet};`}
  ${media.phone`line-height: ${props => props.theme.lineHeight.h3.phone};`}
`
export const H4 = styled.h4`
  font-weight:400;
  ${media.desktop`font-size: ${props => props.theme.fontSize.h4.desktop};`}
  ${media.tablet`font-size: ${props => props.theme.fontSize.h4.tablet};`}
  ${media.phone`font-size: ${props => props.theme.fontSize.h4.phone};`}
  ${media.desktop`line-height: ${props => props.theme.lineHeight.h4.desktop};`}
  ${media.tablet`line-height: ${props => props.theme.lineHeight.h4.tablet};`}
  ${media.phone`line-height: ${props => props.theme.lineHeight.h4.phone};`}
`
export const H4Capitals = H4.extend`
  text-transform: uppercase;
`
export const Small = styled.small`
  ${media.desktop`font-size: 0.7em;`}
  ${media.tablet`font-size: 0.7em;`}
  ${media.phone`font-size: 0.7em;`}
  ${media.desktop`line-height: 0.6em;`}
  ${media.tablet`line-height: 0.6em;`}
  ${media.phone`line-height: 0.6em;`}
`
export const P = styled.p`
  ${media.desktop`font-size: ${props => props.theme.fontSize.p.desktop};`}
  ${media.tablet`font-size: ${props => props.theme.fontSize.p.tablet};`}
  ${media.phone`font-size: ${props => props.theme.fontSize.p.phone};`}
  ${media.desktop`line-height: ${props => props.theme.lineHeight.p.desktop};`}
  ${media.tablet`line-height: ${props => props.theme.lineHeight.p.tablet};`}
  ${media.phone`line-height: ${props => props.theme.lineHeight.p.phone};`}
`
export const PCapitals = styled.p`
  text-transform: uppercase;
`
