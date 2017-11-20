import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import {
  H1,
  H2,
  H3,
  H3Capitals,
  H4,
  H4Capitals,
  Small,
  P,
  PCapitals
 } from '../src/components/atoms/typography'
import '../src/utils/global-css'
//TODO: injectGlobal might has to be moved somewhere else
/*import { injectGlobal } from 'styled-components'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Assistant:300');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Assistant', sans-serif;
    font-size: 100%;
  }
`
*/
/*
*
* MOLECULES
*
*/

//Timeline
/*
storiesOf('Timeline', module)
  .addDecorator(withKnobs)
  .add('TimelineHeader', () => (
    <TimelineHeader
      titleleft={text("Lefthand Title", "Work")}
      titleright={text("Righthand Title", "Studies")}
    />
  ))
  .add('Timeline', () => (
    <Timeline
      startDate = {text("Start date", "1999")}
      endDate = {text("End date", "2000")}
      right = {boolean("Position right?", false)}
      left = {boolean("Position left?", true)}
      addTopBorder = {boolean("Border top?", false)}
      addBottomBorder = {boolean("Border bottom?", false)}
      bothleft = {boolean("Additional lefthand border?", false)}
      bothright = {boolean("Additional righthand border?", false)}
      title = {text("Title of Position", "Product Owner")}
      company = {text("Company:", "SRF")}
      school = {text("School:", "University of Zurich")}
      responsability = {text("Responsability:", "New Website")}
      learned = {text("Learned: ", "SRF")}
      showmore = {(boolean("Show more"), false)} //TODO: This does not work (see Error Message: Has to do with controlled components)
    />
  ))
*/
/*
*
* ATOMS
*
*/
/*
//Images
storiesOf('FullWithImage', module)
  .addDecorator(withKnobs)
  .add('full with image', () => (
    <FullWithImage
      assetType={text('Asset Type','.jpg')}
      assetName={text('Asset Name','thomas_moser_3')}
      altText={text('Alternative Text','This is Thomas')}
    />
  ))
*/
//Typography
storiesOf('Typography', module)
  .add('H1',() =>(
    <H1>Sometext</H1>
  ))
  .add('H2',() =>(
    <H2>Sometext</H2>
  ))
  .add('H3',() =>(
    <H3>Sometext</H3>
  ))
  .add('H3Capitals',() =>(
    <H3Capitals>Sometext</H3Capitals>
  ))
  .add('H4',() =>(
    <H4>Sometext</H4>
  ))
  .add('H4Capitals',() =>(
    <H4Capitals>Sometext</H4Capitals>
  ))
  .add('Small',() =>(
    <Small>Sometext</Small>
  ))
  .add('P',() =>(
    <P>Sometext</P>
  ))
  .add('PCapitals',() =>(
    <PCapitals>Sometext</PCapitals>
  ))
