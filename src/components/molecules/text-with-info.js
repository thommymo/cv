import React from 'react'
import styled from 'styled-components'
import { InnerHTML, H3, Small } from '../atoms/typography'
import { media } from '../../utils/breakpoints'


export const TextWithInfo = ({
  title,
  description,
  infoTitle,
  infoDescrition,
}) => (
  <StyledJobdescription>
    <Tasks>
      <H3>{infoTitle}</H3>
      <InnerHTML dangerouslySetInnerHTML={infoDescrition} />
    </Tasks>
    <Projects>
      <Small>
        <H3>{title}</H3>
        <InnerHTML dangerouslySetInnerHTML={description} />
      </Small>
    </Projects>
  </StyledJobdescription>
)

const StyledJobdescription = styled.div`
  ${media.desktop`display: flex; `}
`
const Projects = styled.div`
  flex: 1;
  font-size: 1.2em;
  margin-top: 0.5em;
  ${media.desktop`padding: 0 2em 0 2.5em; `}
  & h3 {
    text-transform: uppercase;
    margin-bottom: -10px;
  }
`
const Tasks = styled.div`
  flex: 3;
  ${media.desktop`padding: 0 2em 0 2.5em; `}
  ${media.desktop`order: 1; `}
`
