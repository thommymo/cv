import { media } from '../../utils/breakpoints'
import styled, { css } from 'styled-components'

/*
  Typography
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
export const H1 = styled.h1.attrs({ type: 'h1' })`
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
`
export const PCapitals = styled.p`
  text-transform: uppercase;
`
