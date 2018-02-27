import styled from "styled-components"
import { print } from "../../utils/breakpoints"

//TODO: Check if section is the correct html paragraph for this.

export const Section = styled.div`
  padding-bottom: 4.5em;
  ${print.paper`
    margin-bottom:0em;
    padding-bottom:2em;`};
`
export const SectionCentered = Section.extend`
  text-align: center;
`
export const HeaderTitle = styled.div`
  text-align: center;
  margin-top: 7em;
  margin-bottom: 9em;
  ${print.paper`
    margin-top:4em;
    margin-bottom:4em;`};
`
