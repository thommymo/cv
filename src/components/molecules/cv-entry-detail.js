import React from 'react';
import { H1, H2, H3, H4Capitals, PCapitals, Small, InnerHTML } from '../../components/atoms/typography'
import { SectionCentered } from '../../components/atoms/containers'
import { FullWithImage, Image } from '../../components/atoms/images'
import styled from 'styled-components'
import { media } from '../../utils/breakpoints'

/*
  Molecule
*/

export const CVEntryHeader = ({
  organization,
  startDate,
  endDate,
  title,
  color,
}) => {
  const startDateDate = new Date(startDate)
  const endDateDate = new Date(endDate)
  const options = { year: 'numeric', month: 'long'}
  const formattedStartDate = startDate ? startDateDate.toLocaleDateString('de-DE', options) : ""
  const formattedEndDate = endDate ? endDateDate.toLocaleDateString('de-DE', options) : ""
  return(
    <HeaderWithBorder color={color}>
      <DateAndCompany>
        <HeaderWithDate>
          <H4Capitals>{formattedStartDate} – {formattedEndDate}</H4Capitals>
        </HeaderWithDate>
        <H4Capitals>{organization}</H4Capitals>
      </DateAndCompany>
      <H1>{title}</H1>
    </HeaderWithBorder>
  )
}

/*
Containers (as part of a molecule)
*/

const DateAndCompany = styled.div`
  padding-bottom:2em;
`
const HeaderWithBorder = styled.div`
  border: solid 0px;
  text-align: center;
  border-top-width: 40px;
  border-top-color: transparent;
  border-left-width: 40px;
  border-left-color: ${props=>props.theme.colors.primary};
  border-right-width: 40px;
  border-right-color: ${props=>props.theme.colors.primary};
  padding-bottom: 6em;
  position: relative;
`
const HeaderWithDate = styled.div`
  margin-top: -52px;
  color: ${props => props.theme.colors.white};
`



/*
  Molecule
*/

export const CVEntryFooter = () => (
    <FooterWithBorder />
)

/*
Containers (as part of a molecule)
*/


const FooterWithBorder = styled.div`
  border: solid 0px;
  border-bottom-width: 40px;
  border-bottom-color: transparent;
  border-left-width: 40px;
  border-left-color: ${props=>props.theme.colors.primary};
  border-right-width: 40px;
  border-right-color: ${props=>props.theme.colors.primary};
  position: relative;
  z-index: 1000;
  ${media.desktop`box-shadow: 700px 0px ${props=>props.theme.colors.primary}, -700px 0px ${props=>props.theme.colors.primary}; `}
  ${media.tablet`box-shadow: 300px 0px ${props=>props.theme.colors.primary}, -300px 0px ${props=>props.theme.colors.primary}; `}
  ${media.phone`box-shadow: 100px 0px ${props=>props.theme.colors.primary}, -100px 0px ${props=>props.theme.colors.primary}; `}
`
