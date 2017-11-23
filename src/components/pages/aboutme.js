import React from 'react'
import PageShell from '../../components/templates/page-shell'
import { H2, P } from '../../components/atoms/typography'
import { TextLinkBold } from '../../components/atoms/buttons'
import { Section, SectionCentered } from '../../components/atoms/containers'
import { ImagesGrid } from '../../components/molecules/images-grid'
import { LogoCloud } from '../../components/molecules/logo-cloud'
import { TextWithLabel } from '../../components/molecules/text-with-label'
import { FrontTitle } from '../../components/molecules/fronttitle'

export const AboutMe = () => (
  <PageShell withMainNavigation={true} title="Über mich">
    <FrontTitle title="Thomas Moser" subtitle="Frontend Web Developer" />
    <Section>
      <TextWithLabel label="Erfahrung">
        <P>7 Jahre Web Developer, 7 Jahre Product Owner und Projektleiter und nun wieder Web Developer mit Fokus auf Frontend.</P>
        <P><TextLinkBold href="/cv">Mein Lebenslauf &rarr;</TextLinkBold></P>
      </TextWithLabel>
      <TextWithLabel label="&#10084;-Technologie">
        <P>React, ES6 und alles was dazugehört.</P>
        <P><small>Diesen CV habe ich mit React, Styled Components, Storybook, Apollo, GraphQL und GraphCMS erstellt.</small></P>
        <P><TextLinkBold href="https://github.com/thommymo/cv/">Code auf Github &rarr;</TextLinkBold><TextLinkBold href="/stories">Design in Storybook &rarr;</TextLinkBold></P>
      </TextWithLabel>
      <TextWithLabel label="Sprachen">
        <P><small>
          Deutsch: Muttersprache<br/>
          Englisch: sehr gut in Wort und Schrift (4-monatiger Aufenthalt in Kanada)<br/>
          Französisch: Matura-Niveau (7 Jahre Unterricht)
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
      <H2>Arbeit- und Auftraggeber</H2>
      <P>
        <small>
          Schweizer Radio und Fernsehen, Luzerner Kantonsspital, Unic, Pädagogische Hochschule Zentralscheiz, Universität Zürich, UBS, Credit Suisse, Winterthur Versicherungen, Walo Bertschinger, Quickline, Akris, Doodah
        </small>
      </P>
    </SectionCentered>
    <SectionCentered>
      <ImagesGrid
        columns={2}
        title="Bei der Arbeit"
        images={[
          {handle: "HCgGXNqFTxOFVQa3hX4R"},
          {handle: "rg7ELbbGTH6AAb72hK7Z"}
        ]}/>
    </SectionCentered>
    <SectionCentered>
      <ImagesGrid
        columns={3}
        title="In der Freizeit"
        images={[
          {handle: "HCgGXNqFTxOFVQa3hX4R"},
          {handle: "rg7ELbbGTH6AAb72hK7Z"},
          {handle: "J1vMC6coS8KwmsgT1e4m"}
        ]}/>
    </SectionCentered>
  </PageShell>
)
