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
      <CVEntries
        id={entry.id}
        showmore={entry.showmore}
        startDate={entry.startDate}
        endDate={entry.endDate}
        right={entry.right}
        left={entry.left}
        bothleft={entry.bothleft}
        bothright={entry.bothright}
        title={entry.title}
        organization={entry.organization}
        excerpt={entry.excerpt}
        addTopLeftTriangle={entry.addTopLeftTriangle}
        addBottomLeftTriangle={entry.addBottomLeftTriangle}
        addTopRightTriangle={entry.addTopRightTriangle}
        addBottomRightTriangle={entry.addBottomRightTriangle}
        moreinfocventry={entry.moreinfocventry}
        furtherEducationTitle={entry.furtherEducationTitle}
        furtherEducationContent={entry.furtherEducationContent}
      />
    ))}
  </PageShell>
)
