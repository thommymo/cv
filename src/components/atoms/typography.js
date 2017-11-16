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
  display: inline-block;
`
export const H2 = styled.h2`
  font-weight:400;
  ${media.desktop`font-size: 2.25em;`}
  ${media.tablet`font-size: 2em;`}
  ${media.phone`font-size: 1.625em;`}
  ${media.desktop`line-height: 1.25em;`}
  ${media.tablet`line-height: 1.25em;`}
  ${media.phone`line-height: 1.15384615em;`}

  display: inline-block;
`
export const H3 = styled.h3`

`
export const H4 = styled.h4`
  font-weight:400;
  ${media.desktop`font-size: 1.125em;`}
  ${media.tablet`font-size: 1.125em;`}
  ${media.phone`font-size: 1em;`}
  ${media.desktop`line-height: 1.22222222em;`}
  ${media.tablet`line-height: 1.22222222em;`}
  ${media.phone`line-height: 1.22222222em;`}
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

`
export const PCapitals = styled.p`
  text-transform: uppercase;
`
export const UL = styled.ul`

  padding-left:0.3em;
  list-style-position: inside;
`
export const LI = styled.li`

`
