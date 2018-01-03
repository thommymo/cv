import React from 'react'
import PageShell from '../../components/templates/page-shell'
import { H2, P, APrintOnly } from '../../components/atoms/typography'
import { TextLinkBold, TextAnchorBold } from '../../components/atoms/buttons'
import { Section, SectionCentered } from '../../components/atoms/containers'
import { ImagesGrid } from '../../components/molecules/images-grid'
import { LogoCloud } from '../../components/molecules/logo-cloud'
import { TextWithLabel } from '../../components/molecules/text-with-label'
import { FrontTitle } from '../../components/molecules/fronttitle'

export const AboutMeEn = () => (
  <PageShell withMainNavigation={true} title="About Me">
    <FrontTitle title="Thomas Moser" subtitle="Frontend Web Developer" />
    <Section>
      <TextWithLabel label="Experience">
        <P>7 years Web Developer, 7 years Product Owner and Project Manager and now Web Developer again with focus on Frontend.</P>
        <P><TextLinkBold to="/cv">My CV (in German) &rarr;</TextLinkBold><APrintOnly href="https://www.thomasmoser.ch/cv/">thomasmoser.ch/cv/</APrintOnly></P>
      </TextWithLabel>
      <TextWithLabel label="Technology I &#10084;">
        <P>React, ES6 and everything around it.</P>
        <P><small>I built my CV with React, Styled Components, Storybook, Apollo, GraphQL and GraphCMS.</small></P>
        <P><TextAnchorBold href="https://github.com/thommymo/cv/">Code on Github &rarr;</TextAnchorBold><APrintOnly href="https://github.com/thommymo/cv/">github.com/thommymo/cv/</APrintOnly></P>
      </TextWithLabel>
      <TextWithLabel label="Sprachen">
        <P><small>
          German: mother tongue <br/>
          Englisch: very good (I spent 4 months learning English in Canada)<br/>
          French: lessons at school for 7 years
        </small></P>
      </TextWithLabel>
    </Section>
    <SectionCentered>
      <LogoCloud
        title="Awards"
        images={[
          { handle:"jsnZ6OFJSiKMI8XKIomE"},
          { handle:"ONnC5Gt6Tam0DOJDD4wJ"},
          { handle:"IZu0yTbaT3GrHZOSBKtj"},
          { handle:"PM9hcfSCqtvJMARYHcQ8"},
          { handle:"q35H0JAHShOSNvIEwkVg"},
          { handle:"WTEDLoc2RleNnxlxG23R"},
          { handle:"w7ammVlTMWvbP7AvC5jX"},
          { handle:"YRMPWRWkQYuSgcPBFfT6"},
          { handle:"5kb26FtFTluYw1mGEkI4"}
        ]}
        height="110"
      />
    </SectionCentered>
    <SectionCentered>
      <H2>Employers</H2>
      <P>
        <small>
          Schweizer Radio und Fernsehen, Luzerner Kantonsspital, Unic, Pädagogische Hochschule Zentralschweiz
        </small>
      </P>
    </SectionCentered>
    <SectionCentered>
      <H2>Clients</H2>
      <P>
        <small>UBS, Credit Suisse, Winterthur Versicherungen, Universität Zürich, Walo Bertschinger, Quickline, Akris, Doodah</small>
      </P>
    </SectionCentered>
    <SectionCentered>
      <ImagesGrid
        columns={2}
        title="When working"
        images={[
          {handle: "dukoBERFSD247bmXJlDa"},
          {handle: "lzPM32gSje9TsZ6866We"}
        ]}/>
    </SectionCentered>
    <SectionCentered>
      <ImagesGrid
        columns={3}
        title="When having time off"
        images={[
          {handle: "HCgGXNqFTxOFVQa3hX4R"},
          {handle: "rg7ELbbGTH6AAb72hK7Z"},
          {handle: "J1vMC6coS8KwmsgT1e4m"}
        ]}/>
    </SectionCentered>
  </PageShell>
)
