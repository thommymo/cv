import React from 'react'
import styled from 'styled-components'
import { H2, PCapitals } from '../../components/atoms/typography'

import { Image } from '../../components/atoms/images'
import { media } from '../../utils/breakpoints'

export const LogosWithText = ({
  title,
  logos,
}) => (
  <StyledLogosWithText>
    <H2>{title}</H2>
    <Row>
      {
        logos.map((logo) => {
          if(logo.logo && logo.description) {
            return(
              <Award key={logo.logo.handle} logo={logo.logo} description={logo.description} />
            )
          } else {
            return("")
          }
        })
      }
    </Row>
  </StyledLogosWithText>
)

const Award = ({
  logo,
  description
}) => (
  <StyledAward key={logo}>
    <Image handle={logo.handle} height="120" alt="Award Logo"/>
    <PCapitals>{description}</PCapitals>
  </StyledAward>
)

const Row = styled.div`
  ${media.desktop`display: flex; `}
`
const StyledLogosWithText = styled.div`
  display: block;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const StyledAward = styled.div`
  flex: 1;
  display: block;
  padding: 1em 1.5em 1em 1.5em;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
`
