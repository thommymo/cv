import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import FullWithImage from '../src/components/full-with-image'
import {StyledH1} from '../src/components/styled-atoms'

storiesOf('FullWithImage', module)
  .addDecorator(withKnobs)
  .add('full with image', () => (
    <FullWithImage
      assetType={text('Asset Type','.jpg')}
      assetName={text('Asset Name','thomas_moser_3')}
      altText={text('Alternative Text','This is Thomas')}
    />
  ))
storiesOf('Typography', module)
  .add('h1',() =>(
    <StyledH1>Sometext</StyledH1>
  ))
