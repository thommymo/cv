import React from 'react'
import PageShell from '../../components/templates/page-shell'
import { CVEntries, CVEntriesHeader } from '../molecules/cv-entries'
import { Loading } from '../../components/atoms/loading'
import { primaryFontColor } from '../../utils/colors'

export const CVIsLoading = () => (
  <PageShell withMainNavigation title="CV">
    <CVEntriesHeader titleleft="Arbeit" titleright="Ausildung"/>
    <Loading />
  </PageShell>
)

export const CV = ({allCVEntrieses}) => (
  <PageShell withMainNavigation fontColor={primaryFontColor}>
    <CVEntriesHeader titleleft="Arbeit" titleright="Ausildung"/>
    { allCVEntrieses.map((entry) => (
      <CVEntries data={entry} key={entry.id} />
    ))}
  </PageShell>
)
