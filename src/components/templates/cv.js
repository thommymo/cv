import React from 'react'
import PageShell from '../../components/templates/page-shell'
import { CVEntries } from '../molecules/cv-entries'
import { CVEntriesHeader } from '../molecules/cv-entries-header'
import { Loading } from '../../components/atoms/loading'

export const CVIsLoading = () => (
  <PageShell withMainNavigation title="Lebenslauf">
    <CVEntriesHeader titleleft="Arbeit" titleright="Ausbildung"/>
    <Loading />
  </PageShell>
)

export const CV = ({allCVEntrieses}) => (
  <PageShell withMainNavigation title="Lebenslauf">
    <CVEntriesHeader titleleft="Arbeit" titleright="Ausbildung"/>
    { allCVEntrieses.map((entry) => (
      <CVEntries key={entry.id}
        {...entry}
      />
    ))}
  </PageShell>
)
