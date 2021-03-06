import React from "react"
import { H1, H2 } from "../../components/atoms/typography"
import { HeaderTitle } from "../atoms/containers"
import { print } from "../../utils/breakpoints"

export const FrontTitle = ({ title, subtitle }) => (
  <FrontHeaderTitle>
    <H1Front>{title}</H1Front>
    <H2Front>{subtitle}</H2Front>
  </FrontHeaderTitle>
)

const FrontHeaderTitle = HeaderTitle.extend`
  color: transparent;
  margin-top: 10em;
  background-image: -webkit-linear-gradient(
    165deg,
    ${props => props.theme.colors.green} 20%,
    ${props => props.theme.colors.black} 110%
  ); /* For Chrome and Safari */
  background-image: linear-gradient(
    165deg,
    ${props => props.theme.colors.green} 20%,
    ${props => props.theme.colors.black} 110%
  ); /* Standard syntax; must be last */
  -webkit-background-clip: text;
  background-clip: text;
  ${print.paper`margin-top:5em;`} @media all and (-ms-high-contrast: none),
    (-ms-high-contrast: active) {
    color: ${props => props.theme.colors.black};
    background-image: none;
  }
`
const H1Front = H1.extend`
  display: inline;
`
const H2Front = H2.extend`
  display: block;
  margin-top: 0.4em;
  margin-bottom: 0em;
  ${print.paper`margin-bottom:0em;`};
`
