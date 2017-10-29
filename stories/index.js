import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import FullWithImage from '../src/components/full-with-image'
import { H1, H2, H3, H4, P, TimeSpan, Ghostbutton} from '../src/components/styled-atoms'
import { TimelineHeader, Timeline } from '../src/components/timeline'
//TODO: injectGlobal might has to be moved somewhere else
import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Assistant:300');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Assistant', sans-serif;
    font-size: 100%;
  }
`

/*
*
* MOLECULES
*
*/

//Timeline

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
      showmore = {boolean("Show more"), false} //TODO: This does not work (see Error Message: Has to do with controlled components)
    />
  ))

/*
*
* ATOMS
*
*/

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

//Typography
storiesOf('Typography', module)
  .add('h1',() =>(
    <H1>Sometext</H1>
  ))
  .add('h2',() =>(
    <H2>Sometext</H2>
  ))
  .add('h3',() =>(
    <H3>Sometext</H3>
  ))
  .add('h4',() =>(
    <H4>Sometext</H4>
  ))
  .add('paragraph',() =>(
    <P>Sometext</P>
  ))
  .add('Added Together',() =>(
    <div>
      <H1>Lorem ipsum dolor sit amet consectetuer adipiscing
      elit</H1>
      <P>Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa
        <strong>strong</strong>. Cum sociis natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus
        mus. Donec quam felis, ultricies nec, pellentesque
        eu, pretium quis, sem. Nulla consequat massa quis
        enim. Donec pede justo, fringilla vel, aliquet nec,
        vulputate eget, arcu. In enim justo, rhoncus ut,
        imperdiet a, venenatis vitae, justo. Nullam dictum
        felis eu pede <a class="external ext" href="#">link</a> mollis pretium. Integer tincidunt. Cras dapibus.
        Vivamus elementum semper nisi. Aenean vulputate
        eleifend tellus. Aenean leo ligula, porttitor eu,
        consequat vitae, eleifend ac, enim. Aliquam lorem ante,
        dapibus in, viverra quis, feugiat a, tellus. Phasellus
        viverra nulla ut metus varius laoreet. Quisque rutrum.
        Aenean imperdiet. Etiam ultricies nisi vel augue.
      Curabitur ullamcorper ultricies nisi.</P>
      <H1>Lorem ipsum dolor sit amet consectetuer adipiscing
      elit</H1>
      <H2>Aenean commodo ligula eget dolor aenean massa</H2>
      <P>Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem.</P>
      <H2>Aenean commodo ligula eget dolor aenean massa</H2>
      <P>Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem.</P>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetuer.</li>
        <li>Aenean commodo ligula eget dolor.</li>
        <li>Aenean massa cum sociis natoque penatibus.</li>
      </ul>
      <H3>Cum sociis natoque penatibus et magnis dis
      parturient montes nascetur ridiculus mus</H3>
      <P>Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem.</P>
      <H4>Donec quam felis ultricies nec pellentesque eu
      pretium quis sem nlla consequat massa quis enim</H4>
      <blockquote>
        Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa <strong>strong</strong>. Cum sociis
        natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Donec quam felis, ultricies
        nec, pellentesque eu, pretium quis, sem. Nulla consequat
        massa quis enim. Donec pede justo, fringilla vel,
        aliquet nec, vulputate eget, arcu. In <em>em</em>
        enim justo, rhoncus ut, imperdiet a, venenatis vitae,
        justo. Nullam <a class="external ext" href="#">link</a>
        dictum felis eu pede mollis pretium.
      </blockquote>
      <P>Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem.</P>
      <H4>Donec quam felis ultricies nec pellentesque eu
      pretium quis sem nlla consequat massa quis enim</H4>
      <P>Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem.</P>

    </div>
  ))

// Links and Buttons

storiesOf('Links and Buttons', module)
  .add('ghostbutton', () => (
    <Ghostbutton>Test</Ghostbutton>
  ))
