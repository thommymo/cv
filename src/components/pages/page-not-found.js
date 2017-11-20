import React, { PureComponent } from "react"
import { H1, P } from '../atoms/typography'
import { SectionCentered, HeaderTitle } from '../../components/atoms/containers'
import PageShell from '../templates/page-shell'


export default class PageNotFound extends PureComponent {
  //TODO: This is rendered 3 Times altough it is not necessary. Why is that?

  render() {
    return (
      <PageShell title="Page not found" withMainNavigation={true}>
        <SectionCentered>
          <HeaderTitle>
            <H1>Page not found</H1>
          </HeaderTitle>
          <P>Go look for it in the «Treasures from the Wreck of the Unbelievable» and say hello to Damian.</P>
        </SectionCentered>
      </PageShell>
    )
  }
}
