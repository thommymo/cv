import React from 'react'
import styled from 'styled-components'
import PageShell from '../../components/templates/page-shell'
import { H1, H2, P } from '../../components/atoms/typography'

export const AboutMe = () => (
  <PageShell withMainNavigation={true} title="About Me">
    <HeaderTitle>
      <H1>Ich bin Thomas Moser</H1>
      <H2>Frontend Web Developer und Projektleiter</H2>
      <P>React.js</P>
    </HeaderTitle>
    <img src="/assets/images/thomas_moser_3-1000w.jpg" width="400"/>
  </PageShell>
)
const HeaderTitle = styled.div`
  text-align: center;
  margin-top: 7em;
  margin-bottom: 12em;
`
