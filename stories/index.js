import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FullWithImage from '../src/components/full-with-image'

storiesOf('FullWithImage', module)
  .add('full with image', () =>(
    <FullWithImage assetType=".jpg" assetName="thomas_moser_3" altText="This is Thomas"/>
  ))
