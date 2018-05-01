import React from "react";
import PageShell from "../../components/templates/page-shell";
import { H2, P, APrintOnly } from "../../components/atoms/typography";
import { TextLinkBold, TextAnchorBold } from "../../components/atoms/buttons";
import { Section, SectionCentered } from "../../components/atoms/containers";
import { ImagesGrid } from "../../components/molecules/images-grid";
import { LogoCloud } from "../../components/molecules/logo-cloud";
import { TextWithLabel } from "../../components/molecules/text-with-label";
import { FrontTitle } from "../../components/molecules/fronttitle";

export const AboutMe = () => (
  <PageShell withMainNavigation={true} title="Über mich">
    <FrontTitle
      title="Thomas Moser"
      subtitle="Projektleiter und Web Developer"
    />
    <Section>
      <TextWithLabel label="Erfahrung">
        <P>
          14 Jahre Web: 7 Jahre Web Developer, 7 Jahre Product Owner und
          Projektleiter
        </P>
        <P>
          <TextLinkBold to="/cv">Mein Lebenslauf &rarr;</TextLinkBold>
          <APrintOnly href="https://www.thomasmoser.ch/cv/">
            thomasmoser.ch/cv/
          </APrintOnly>
        </P>
      </TextWithLabel>
      <TextWithLabel label="&#10084;-Technologie">
        <P>React, ES6 und alles was dazugehört.</P>
        <P>
          <small>
            Diesen CV habe ich mit React, Styled Components, Storybook, Apollo,
            GraphQL und GraphCMS erstellt.
          </small>
        </P>
        <P>
          <TextAnchorBold href="https://github.com/thommymo/cv/">
            Code auf Github &rarr;
          </TextAnchorBold>
          <APrintOnly href="https://github.com/thommymo/cv/">
            github.com/thommymo/cv/
          </APrintOnly>
        </P>
      </TextWithLabel>
    </Section>
    <SectionCentered>
      <LogoCloud
        title="Awards"
        images={[
          { handle: "BIncWNLcQH6Wdzy3D3fR" },
          { handle: "gqpatgRmTOe8uQnDgDwY" },
          { handle: "jsnZ6OFJSiKMI8XKIomE" },
          { handle: "ONnC5Gt6Tam0DOJDD4wJ" },
          { handle: "IZu0yTbaT3GrHZOSBKtj" },
          { handle: "PM9hcfSCqtvJMARYHcQ8" },
          { handle: "q35H0JAHShOSNvIEwkVg" },
          { handle: "WTEDLoc2RleNnxlxG23R" },
          { handle: "w7ammVlTMWvbP7AvC5jX" },
          { handle: "YRMPWRWkQYuSgcPBFfT6" },
          { handle: "5kb26FtFTluYw1mGEkI4" }
        ]}
        height="110"
      />
    </SectionCentered>
    <SectionCentered>
      <H2>Arbeitgeber</H2>
      <P>
        <small>
          Schweizer Radio und Fernsehen, Luzerner Kantonsspital, Unic,
          Pädagogische Hochschule Zentralschweiz, Smartive
        </small>
      </P>
    </SectionCentered>
    <SectionCentered>
      <H2>Auftraggeber</H2>
      <P>
        <small>
          Migros, UBS, Credit Suisse, Winterthur Versicherungen, Universität
          Zürich, Walo Bertschinger, Quickline, Akris, Doodah
        </small>
      </P>
    </SectionCentered>
    <SectionCentered>
      <ImagesGrid
        columns={2}
        title="Bei der Arbeit"
        images={[
          { handle: "n53d9XLvTJ6BL1S3t6re" },
          { handle: "KAX2aPXTQiexuQfeThIM" }
        ]}
      />
    </SectionCentered>
    <SectionCentered>
      <ImagesGrid
        columns={3}
        title="In der Freizeit"
        images={[
          { handle: "HCgGXNqFTxOFVQa3hX4R" },
          { handle: "rg7ELbbGTH6AAb72hK7Z" },
          { handle: "J1vMC6coS8KwmsgT1e4m" }
        ]}
      />
    </SectionCentered>
  </PageShell>
);
