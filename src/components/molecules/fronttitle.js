import React from 'react'
import styled from 'styled-components'
import { H1, H2 } from '../../components/atoms/typography'

export const FrontTitle = (props) => (
  <HeaderTitle>
    <H1Front>{props.title}</H1Front>
    <H2Front>{props.subtitle}</H2Front>
  </HeaderTitle>
)

const HeaderTitle = styled.div`
  color:transparent;
  text-align: center;
  margin-top: 10em;
  margin-bottom: 9em;
  background-image: -webkit-linear-gradient(165deg, ${props => props.theme.colors.green} 20%,${props => props.theme.colors.black} 110%); /* For Chrome and Safari */
  background-image:         linear-gradient(165deg, ${props => props.theme.colors.green} 20%,${props => props.theme.colors.black} 110%); /* Standard syntax; must be last */
  -webkit-background-clip: text;
  background-clip: text;
`
const H1Front = H1.extend`
  display: inline;
`
const H2Front = H2.extend`
  display: block;
  margin-top: 0.4em;
`
