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

    <SectionCentered>
      <ImagesGrid
        columns={2}
        images={[
          { handle: "n53d9XLvTJ6BL1S3t6re" },
          { handle: "KAX2aPXTQiexuQfeThIM" }
        ]}
      />
    </SectionCentered>
    <Section />
    <Section>
      <H2Centered>Ich und die Republik</H2Centered>

      <TextWithLabel label="Meine Meinung">
        <P>
          Ich bin «Verleger» der ersten Stunde. Die Republik ist mir bereits ans
          Herz gewachsen. Mich beeindrucken der Mut und die Ausdauer der
          Drahtzieher hinter dem Project R. So eine Bewegung war längst
          überfällig. Chapeau!
        </P>
      </TextWithLabel>
      <TextWithLabel label="Mein Wunsch">
        <P>
          Der Start ist gelungen. Die Erwartungen sind und bleiben hoch. Nicht
          nur an den Journalismus, auch an die Technologie. Was ich mir echt
          Wünsche: mein Know-how, meine Tatkraft und meine Persönlichkeit bei
          der Republik einbringen zu dürfen.
        </P>
      </TextWithLabel>
      <TextWithLabel label="Meine Erfahrung">
        <P>
          7 Jahre Web Developer, 7 Jahre Product Owner und Projektleiter (3.5
          Jahre bei SRF) und nun wieder Web Developer mit Fokus auf Frontend.
        </P>
        <P>
          <TextAnchorBold href="/">Mehr über mich &rarr;</TextAnchorBold>
          <APrintOnly href="https://www.thomasmoser.ch">
            thomasmoser.ch
          </APrintOnly>
        </P>
      </TextWithLabel>
    </Section>
    <SectionCentered>
      <ImagesGrid
        columns={3}
        title="Was mir an der Republik besonders gefällt"
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
              "Dass die Globilisierung in Gefahr – durch einen Mann mit falschem Haar!"
          }
        ]}
      />
    </SectionCentered>
    <SectionCentered>
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
              "Schöne Art, auch Nicht-Verleger an der Republik teilhaben zu lassen."
          }
        ]}
      />
    </SectionCentered>
    <SectionCentered>
      <ImagesGrid
        columns={3}
        title="Meine «Top 3» Änderungswünsche"
        images={[
          {
            handle: "AOAZZ8BbR5WGWfEHGEWP",
            title: "① Switzerland first",
            caption:
              "Mehr Artikel mit Bezug zur Schweiz. Alles andere finde ich woanders."
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
            caption: "Mit kurzen Absätzen mehr Lust am Lesen wecken."
          }
        ]}
      />
    </SectionCentered>
    <Section>
      <H2Centered>Wieso ich guten Journalismus will</H2Centered>
      <TextWithLabel label="Democracy dies in Darkness">
        <P>
          Unser Zusammenleben in einer (halb-)direkten Demokratie ist nur dank
          gutem Journalismus möglich – einer unabhängigen vierten Gewalt.
        </P>
      </TextWithLabel>
      <TextWithLabel label="Information Overload">
        <P>
          Wir benötigen Medien, die einordnen und Wesentliches von
          Unwesentlichem trennen. Guter Journalismus gibt Orientierung.
        </P>
      </TextWithLabel>
      <TextWithLabel label="Cognitive Dissonance">
        <P>
          Guter Journalismus regt mich an zu reflektieren, eine Meinung zu
          bilden und ab und an zu revidieren.
        </P>
      </TextWithLabel>
    </Section>
    <Section>
      <H2Centered>Meine Skills als Coder</H2Centered>
      <TextWithLabel label="I ❤ Coding">
        <P>
          Was man gerne macht, macht man gut. Beim Coden vergesse ich die Zeit
          und gerate oft in einen Flow-Zustand. Ähnlich wie früher beim Spielen
          mit Lego.<br />
          <small>Passiert mir auch heute noch mit meinen Göttibuben...</small>
        </P>
      </TextWithLabel>
      <TextWithLabel label="Neugier">
        <P>
          Neues fasziniert mich. Ich probiere gerne aus. Stehe ungern still.
          Werde gerne besser – in dem was ich tue.
        </P>
      </TextWithLabel>
      <TextWithLabel label="Qualität">
        <P>
          Bei der Abnahme von Stories als Product Owner nervten mich Bugs,
          insbesondere die offensichtlichen. Mein Ziel als Coder: Ich sammle
          sogar die versteckten Käfer ein. <br />
          <br />
          Ich habe live miterlebt, wie die Produkte-Entwicklung ohne
          automatisierte Tests zunehmend langsamer wird. Deshalb: TDD.
        </P>
      </TextWithLabel>
      <TextWithLabel label="Kommunikation">
        <P>
          Gut kommunizieren heisst zuhören, Empathie zeigen, andere Sichtweisen
          einnehmen. Aber auch erklären, aufzeigen, verhandeln. Das kann ich
          gut.
        </P>
      </TextWithLabel>
    </Section>
    <SectionCentered>
      <ImagesGrid
        columns={3}
        title="Projekte, die ich gerne zeige"
        images={[
          {
            handle: "dSGo6eyTmW0m2iVtDdpQ",
            title: "2018: Mein CV",
            caption:
              "Mit React, Styled Components, Apollo, GraphQL und GraphCMS",
            more: "Code auf github",
            link: "https://github.com/thommymo/cv"
          },
          {
            handle: "ogmskufMSDWqlFH7SFmn",
            title: "2017: Relaunch luks.ch",
            caption:
              "Verantwortlich als Projektleiter für Online-Strategie und Relaunch luks.ch",
            more: "Mehr zu meinem Job beim LUKS",
            link: "/id/cj98jwmnkhnkv0109abg9vwbh/"
          },
          {
            handle: "vJWmSHncTRCO6GkewtAB",
            title: "2012: Relaunch srf.ch",
            caption: "Product Owner von srf.ch während und nach dem Relaunch",
            more: "Mehr zu meinem Job bei SRF",
            link: "/id/cj98k52s0p93601566y0bjhws/"
          }
        ]}
      />
    </SectionCentered>
    <SectionCentered>
      <ImagesGrid
        columns={3}
        title="Mittlerweile offline: Projekte, die ich gerne gezeigt hätte"
        images={[
          {
            handle: "HhPh25StSfC2w3sq8i1K",
            title: "2008: Schweizr Suissr Svizzr",
            caption:
              "Design und Mitentwicklung iPhone-App und Web-Plattform für Location Based Mobile Learning",
            more: "Mehr zu meinem Job an der PHZ",
            link: "/id/cj99f3e0z5z8q0143vy5vlxsg/"
          },
          {
            handle: "9Cm2slbHSTWtQ3JLOqBa",
            title: "2006: Lerntagebuch.ch",
            caption:
              "Design und Entwicklung einer Plattform zur Förderung von Lernstrategien mittels Weblogs",
            more: "Mehr zu meinem Job an der PHZ",
            link: "/id/cj99f3e0z5z8q0143vy5vlxsg/"
          }
        ]}
      />
    </SectionCentered>
    <SectionCentered>
      <ImagesGrid
        columns={3}
        title="Projekt, das ich in Zukunft gerne zeigen würde"
        images={[
          {
            handle: "jIbksxZ3RO2AKnheDpnv",
            title: "Republik",
            caption:
              "Die Republik ist ein Magazin für Politik, Wirtschaft, Gesellschaft. Kurz: für alles, was verwickelt oder komplex ist.",
            more: "Code auf github",
            link: "https://github.com/orbiting"
          }
        ]}
      />
    </SectionCentered>
    <SectionCentered>
      <H2Centered>Mehr über mich</H2Centered>
      <P>
        <TextAnchorBold href="/">Übersicht &rarr;</TextAnchorBold>
        <br />
        <TextAnchorBold href="/cv">Mein Lebenslauf &rarr;</TextAnchorBold>
      </P>
    </SectionCentered>
  </PageShell>
)
