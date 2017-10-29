import { media } from '../utils/breakpoints'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//Typography

export const H1 = styled.h1`
  ${media.desktop`font-size: 3em;`}
  ${media.tablet`font-size: 2.5em;`}
  ${media.phone`font-size: 2em;`}
  ${media.desktop`line-height: 1.05em;`}
  ${media.tablet`line-height: 1.25em;`}
  ${media.phone`line-height: 1.25em;`}
`
export const H2 = styled.h2`
  ${media.desktop`font-size: 2.25em;`}
  ${media.tablet`font-size: 2em;`}
  ${media.phone`font-size: 1.625em;`}
  ${media.desktop`line-height: 1.25em`}
  ${media.tablet`line-height: 1.25em`}
  ${media.phone`line-height: 1.15384615em;`}
`
export const H3 = styled.h3`
  ${media.desktop`font-size: 1.75em;`}
  ${media.tablet`font-size: 1.5em;`}
  ${media.phone`font-size: 1.375em`}
  ${media.desktop`line-height: 1.25em`}
  ${media.tablet`line-height: 1.25em`}
  ${media.phone`line-height: 1.13636364em`}
`
export const H4 = styled.h4`
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
export const Ghostbutton = styled(Link)`
  border:1px solid;
  padding: 5px 10px 5px 10px;
  width: auto;
  float:none;
  text-decoration: none;
`;
