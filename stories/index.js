import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import FullWithImage from '../src/components/full-with-image'
import { StyledH1, StyledH2, StyledH3, StyledH4, StyledP } from '../src/components/styled-atoms'

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
    <StyledH1>Sometext</StyledH1>
  ))
  .add('h2',() =>(
    <StyledH2>Sometext</StyledH2>
  ))
  .add('h3',() =>(
    <StyledH3>Sometext</StyledH3>
  ))
  .add('h4',() =>(
    <StyledH4>Sometext</StyledH4>
  ))
  .add('paragraph',() =>(
    <StyledP>Sometext</StyledP>
  ))
  .add('Added Together',() =>(
    <div>
      <StyledH1>Lorem ipsum dolor sit amet consectetuer adipiscing
      elit</StyledH1>
      <StyledP>Lorem ipsum dolor sit amet, consectetuer adipiscing
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
      Curabitur ullamcorper ultricies nisi.</StyledP>
      <StyledH1>Lorem ipsum dolor sit amet consectetuer adipiscing
      elit</StyledH1>
      <StyledH2>Aenean commodo ligula eget dolor aenean massa</StyledH2>
      <StyledP>Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem.</StyledP>
      <StyledH2>Aenean commodo ligula eget dolor aenean massa</StyledH2>
      <StyledP>Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem.</StyledP>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetuer.</li>
        <li>Aenean commodo ligula eget dolor.</li>
        <li>Aenean massa cum sociis natoque penatibus.</li>
      </ul>
      <StyledH3>Cum sociis natoque penatibus et magnis dis
      parturient montes nascetur ridiculus mus</StyledH3>
      <StyledP>Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem.</StyledP>
      <StyledH4>Donec quam felis ultricies nec pellentesque eu
      pretium quis sem nlla consequat massa quis enim</StyledH4>
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
      <StyledP>Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem.</StyledP>
      <StyledH4>Donec quam felis ultricies nec pellentesque eu
      pretium quis sem nlla consequat massa quis enim</StyledH4>
      <StyledP>Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem.</StyledP>

    </div>
  ))
