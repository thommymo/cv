import { media } from '../../utils/breakpoints'
import styled from 'styled-components'
import { black } from '../../utils/colors'

/*
  Typography
*/

export const H1 = styled.h1`
  font-weight:400;
  ${media.desktop`font-size: 4em;`}
  ${media.tablet`font-size: 2.5em;`}
  ${media.phone`font-size: 2em;`}
  ${media.desktop`line-height: 1.25em;`}
  ${media.tablet`line-height: 1.25em;`}
  ${media.phone`line-height: 1.25em;`}
  border-bottom:solid 5px ${black};
  border-left:solid 8px transparent;
`
export const H2 = styled.h2`
  font-weight:400;
  ${media.desktop`font-size: 2.25em;`}
  ${media.tablet`font-size: 2em;`}
  ${media.phone`font-size: 1.625em;`}
  ${media.desktop`line-height: 1.25em`}
  ${media.tablet`line-height: 1.25em`}
  ${media.phone`line-height: 1.15384615em;`}
  border-bottom:solid 3px ${black};
  border-left:solid 5px transparent;
`
export const H3 = styled.h3`
  font-weight:400;
  ${media.desktop`font-size: 1.75em;`}
  ${media.tablet`font-size: 1.5em;`}
  ${media.phone`font-size: 1.375em`}
  ${media.desktop`line-height: 1.7em`}
  ${media.tablet`line-height: 1.4em`}
  ${media.phone`line-height: 1.30em`}
`
export const H4 = styled.h4`
  font-weight:400;
  ${media.desktop`font-size: 1.125em`}
  ${media.tablet`font-size: 1.125em`}
  ${media.phone`font-size: 1em`}
  ${media.desktop`line-height: 1.22222222em`}
  ${media.tablet`line-height: 1.22222222em`}
  ${media.phone`line-height: 1.22222222em`}
`
export const H4Capitals = H4.extend`
  text-transform: uppercase;
`
export const P = styled.p`
  ${media.desktop`font-size: 1em;`}
  ${media.tablet`font-size: 1em;`}
  ${media.phone`font-size: 1em;`}
  ${media.desktop`line-height: 1.22222222em`}
  ${media.tablet`line-height: 1.22222222em`}
  ${media.phone`line-height: 1.11111111em`}
`
export const PCapitals = P.extend`
  text-transform: uppercase;
`
export const UL = styled.ul`
  ${media.desktop`font-size: 1em;`}
  ${media.tablet`font-size: 1em;`}
  ${media.phone`font-size: 1em;`}
  ${media.desktop`line-height: 1.22222222em`}
  ${media.tablet`line-height: 1.22222222em`}
  ${media.phone`line-height: 1.11111111em`}
  padding-left:0.3em;
  list-style-position: inside;
`
export const LI = styled.li`
  ${media.desktop`font-size: 1em;`}
  ${media.tablet`font-size: 1em;`}
  ${media.phone`font-size: 1em;`}
  ${media.desktop`line-height: 1.22222222em`}
  ${media.tablet`line-height: 1.22222222em`}
  ${media.phone`line-height: 1.11111111em`}
`
