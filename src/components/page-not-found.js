import React, { PureComponent } from "react"
import { H1, P } from '../components/styled-atoms'
import PageShell from '../components/page-shell'


export default class PageNotFound extends PureComponent {
  //TODO: This is rendered 3 Times altough it is not necessary. Why is that?

  render() {
    console.log("404 Rendered")
    return (
      <PageShell title="Page not found">
        <H1>Page not found</H1>
        <P>Go look for it in the Treasures from the Wreck of the Unbelievable and say hello to Damian.</P>
      </PageShell>
    )
  }
}
