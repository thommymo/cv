import React from "react"
import PageShell from "../../components/templates/page-shell"
import {
  H2,
  P,
  APrintOnly,
  H2Centered
} from "../../components/atoms/typography"
import { TextLinkBold, TextAnchorBold } from "../../components/atoms/buttons"
import { Section, SectionCentered } from "../../components/atoms/containers"
import { ImagesGrid } from "../../components/molecules/images-grid"
import { LogoCloud } from "../../components/molecules/logo-cloud"
import { TextWithLabel } from "../../components/molecules/text-with-label"
import { FrontTitle } from "../../components/molecules/fronttitle"

export const Republik = () => (
  <PageShell withMainNavigation={true} title="Über mich">
    <FrontTitle
      title="Thomas Moser"
      subtitle="Bewerbung als React-Entwickler"
    />
    <Section>
      <H2Centered>Wieso ich mich bei der Republik bewerbe?</H2Centered>
      <TextWithLabel label="Verleger">
        <P>
          Ich bin «Verleger» der ersten Stunde. Mich haben die Idee und die
          Persönlichkeiten hinter dem Project R beeindruckt. Ein solches Projekt
          zu starten braucht Mut und Ausdauer. Als «Verleger» das Project R zu
          unterstützen hat sich gelohnt.
        </P>
      </TextWithLabel>
      <TextWithLabel label="Versprochenes einlösen">
        <P>
          Der Start ist gelungen. Die Erwartungen sind und bleiben hoch. Gerne
          würde ich als React-Entwickler dazu beitragen, versprochenes
          einzulösen und die Republik weiter zu entwickeln.
        </P>
      </TextWithLabel>
      <TextWithLabel label="Meine Erfahrung">
        <P>
          7 Jahre Web Developer, 7 Jahre Product Owner und Projektleiter (3.5
          Jahre bei SRF) und nun wieder Web Developer mit Fokus auf Frontend.
        </P>
        <P>
          <TextAnchorBold href="/">Mehr zu mir &rarr;</TextAnchorBold>
          <APrintOnly href="https://www.thomasmoser.ch">
            thomasmoser.ch
          </APrintOnly>
        </P>
      </TextWithLabel>
    </Section>
    <SectionCentered>
      <ImagesGrid
        columns={3}
        title="Was gefällt mir an der Republik?"
        images={[
          {
            handle: "S6a0TcRYQD2IuVdko4xB",
            title: "① Inhalte",
            caption:
              "Trotz 1h Lesezeit: Ich habe diesen Artikel mit Freude zu Ende gelesen."
          },
          {
            handle: "fAyobfcPTRyuHlq1sRFX",
            title: "② Design",
            caption: "Insbesondere Typographie und Farbauswahl gefallen."
          },
          {
            handle: "xWMwZ0W3T3CfsUnKZs1Z",
            title: "③ Humor",
            caption:
              "Dass die Globalisierung in Gefahr durch einen Mann mit falschem Haar!"
          }
        ]}
      />
      <ImagesGrid
        columns={3}
        images={[
          {
            handle: "vtCfBql0RBuwPRzQvW6Q",
            title: "④ Technologie",
            caption: "Meine ❤-Technologien in Aktion."
          },
          {
            handle: "mgGmTBW0TsGMIcge8nxG",
            title: "⑤ Sharing",
            caption:
              "Schöne Art auch Nicht-Verleger an der Republik teilhaben zu lassen."
          }
        ]}
      />
    </SectionCentered>
    <SectionCentered>
      <ImagesGrid
        columns={3}
        title="Was würde ich ändern?"
        images={[
          {
            handle: "AOAZZ8BbR5WGWfEHGEWP",
            title: "① Switzerland first",
            caption: "Mehr Artikel mit Bezug zur Schweiz."
          },
          {
            handle: "sClTaHCrQh2ML6ZyvfJi",
            title: "② Preload Content",
            caption:
              "Die ersten Artikel «preloaden», sobald Hauptseite geladen ist."
          },
          {
            handle: "mxLVIanVTCOtWJ79d70H",
            title: "③ Lesbarkeit",
            caption: "Mit kurzen Absätzen Lust am Lesen wecken."
          }
        ]}
      />
    </SectionCentered>
    <Section>
      <H2Centered>Was interessiert mich am Journalismus?</H2Centered>
      <TextWithLabel label="Democracy dies in Darkness">
        <P>
          Unser Zusammenleben in einer (halb-)direkten Demokratie ist nur dank
          gutem Journalismus möglich. Ich glaube an die Wichtigkeit der vierten
          Gewalt.
        </P>
      </TextWithLabel>
      <TextWithLabel label="Information Overload">
        <P>
          Wir benötigen Medien die einordnen, Wesentliches von Unwesentlichem
          trennen. Guter Journalismus gibt Orientierung.
        </P>
      </TextWithLabel>
      <TextWithLabel label="Cognitive Dissonance">
        <P>
          Guter Journalismus regt mich an über mich selbst nachzudenken, eine
          Meinung zu bilden und meine Meinung ab und zu auch zu ändern.
        </P>
      </TextWithLabel>
    </Section>
    <Section>
      <H2Centered>Was macht mich zu einem guten Coder?</H2Centered>
      <TextWithLabel label="I ❤ Coding">
        <P>
          Ich bin davon überzeugt, dass das was man gern macht, gut macht. Beim
          Coden vergesse ich mich und gerate oft in einen Flow-Zustand. Ähnlich
          wie früher als Kind beim Spielen mit Lego.
        </P>
      </TextWithLabel>
      <TextWithLabel label="Neugier">
        <P>
          Ich bin an Neuem interessiert. Probiere gerne aus. Stehe ungern still.
          Werde gerne besser, in dem was ich tue.
        </P>
      </TextWithLabel>
      <TextWithLabel label="Qualität">
        <P>
          Bei der Abnahme von Stories als Projektleiter und Product Owner
          nervten mich Bugs, insbesondere die Offensichtlichen. Zudem habe ich
          live miterlebt, wie man ohne Tests in der Produkte-Entwicklung
          zunehmend langsamer wird. Deshalb: Qualität ist mir wichtig.
        </P>
      </TextWithLabel>
    </Section>
    <SectionCentered>
      <ImagesGrid
        columns={3}
        title="Projekte auf die ich stolz bin?"
        images={[
          {
            handle: "dSGo6eyTmW0m2iVtDdpQ",
            title: "2018: Mein CV",
            caption:
              "Mit React, Styled Components, Apollo, GraphQL und GraphCMS",
            more: "Mehr auf github",
            link: "/XX"
          },
          {
            handle: "ogmskufMSDWqlFH7SFmn",
            title: "2017: Relaunch luks.ch",
            caption:
              "Verantwortlich als Projektleiter für Online-Strategie und Relaunch luks.ch",
            more: "Mehr zu meinem Job beim LUKS",
            link: "/XX"
          },
          {
            handle: "vJWmSHncTRCO6GkewtAB",
            title: "2012: Relaunch srf.ch",
            caption: "Product Owner von srf.ch während und nach dem Relaunch",
            more: "Mehr zu meinem Job bei SRF",
            link: "/XX"
          }
        ]}
      />
    </SectionCentered>
  </PageShell>
)
