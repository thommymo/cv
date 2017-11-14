import React from 'react'
import { Section, SectionCentered } from '../../components/atoms/containers'
import { FullWithImage } from '../../components/atoms/images'
import { Loading } from '../../components/atoms/loading'
import PageShell from '../../components/templates/page-shell'
import { CSSTransition } from 'react-transition-group'
import { timeoutTransition } from '../../utils/constants'
import { CVEntryHeader, JobDescription, Awards, WorkReview } from '../molecules/cv-entry-detail'
import { primaryFontColor, primary } from '../../utils/colors'

export const PreviewCVEntry = ({
  organization,
  startDate,
  endDate,
  title,
  background,
}) => {
  const color = JSON.parse(background)
  const colorRGBA = primary
  return(
    // TODO: Prevent Apollo to do 2 API calls, when data is available
    // client.select(gql`{ ... }`, '5'); This way I should be able to get data
    // from the store without loading it, that way I can prevent to make 2
    // API calls, when no data is available.
    // Read: https://github.com/apollographql/apollo-client/issues/1036
    <PageShell color={colorRGBA} title={title} backlink="/cv"  fontColor={primaryFontColor} gradient={true}>
      <CVEntryHeader
        organization={organization}
        startDate={startDate}
        endDate={endDate}
        title={title}
        color={colorRGBA}
      />
      <SectionCentered>
        <Loading />
      </SectionCentered>
    </PageShell>
  )
}

/*
  Template
*/

export const CVEntry = ({
  organization,
  startDate,
  endDate,
  title,
  background,
  responsabilities,
  responsabilitiesdescription,
  projects,
  projectdescription,
  descriptionimages,
  awardstitle,
  awardlogo1,
  awarddescription1,
  awardlogo2,
  awarddescription2,
  awardlogo3,
  awarddescription3,
  workreview,
  workreviewimages,
}) => {
  const color = JSON.parse(background)
  const colorRGBA = primary
  return(
      <PageShell color={colorRGBA} title={title} backlink="/cv"  fontColor={primaryFontColor} gradient={true}>
        <CVEntryHeader
          organization={organization}
          startDate={startDate}
          endDate={endDate}
          title={title}
          color={colorRGBA}
        />
        <CSSTransition
          in
          appear={true}
          timeout={timeoutTransition}
          classNames="FadeIn"
          unmountOnExit={true}
        >
          <article>
            { responsabilities &&
              <Section>
                <JobDescription
                  projectstitle={projects}
                  projectdescription={{__html: projectdescription}}
                  responsabilities={responsabilities}
                  responsabilitiesdescription={{__html: responsabilitiesdescription}}
                />
              </Section>
            }
            { descriptionimages &&
              <SectionCentered>
                {descriptionimages.map((image) => (
                  <FullWithImage color={colorRGBA} handle={image.handle} key={image.handle}/>
                )) }
              </SectionCentered>
            }
            { awardstitle &&
              <SectionCentered>
                <Awards
                  awardstitle={awardstitle}
                  awards={[
                    {logo: awardlogo1, description: awarddescription1},
                    {logo: awardlogo2, description: awarddescription2},
                    {logo: awardlogo3, description: awarddescription3}
                  ]}
                />
              </SectionCentered>
            }
            { workreview &&
              <SectionCentered>
                <WorkReview workreview={workreview} workreviewimages={workreviewimages} colorRGBA={colorRGBA}/>
              </SectionCentered>
            }
          </article>
        </CSSTransition>
      </PageShell>
  )
}
