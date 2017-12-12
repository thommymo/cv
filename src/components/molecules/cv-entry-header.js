import React from 'react';
import { H1, H4Capitals } from '../../components/atoms/typography'
import styled from 'styled-components'
import { print } from '../../utils/breakpoints'

/*
  Molecule
*/

export const CVEntryHeader = ({
  organization,
  startDate,
  endDate,
  title,
}) => {
  const startDateDate = new Date(startDate)
  const endDateDate = new Date(endDate)
  const options = { year: 'numeric', month: 'long'}
  const formattedStartDate = startDate ? startDateDate.toLocaleDateString('de-DE', options) : ""
  const formattedEndDate = endDate ? endDateDate.toLocaleDateString('de-DE', options) : ""
  return(
    <HeaderWithBorder>
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
  ${print.paper`border:none;`}
`
const HeaderWithDate = styled.div`
  margin-top: -52px;
  color: ${props => props.theme.colors.white};
`
