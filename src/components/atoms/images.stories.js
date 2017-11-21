import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import {
  Image,
  ImageDynWidth,
  FullWithImage
} from '../../components/atoms/images'

storiesOf('Atom: Images', module)
  .addDecorator(withKnobs)
  .add('Image', () => (
    <Image
      handle = {text("GraphCMS Handle of the Image", "HCgGXNqFTxOFVQa3hX4R")}
      height = {text("Height", "300")}
      alt = {text("Alt Text", "Some Alt text")}
    />
  ))
  .add('ImageDynWidth', () => (
    <ImageDynWidth
      handle = {text("GraphCMS Handle of the Image", "HCgGXNqFTxOFVQa3hX4R")}
      columns = {text("Columns", "2")}
      alt = {text("Alt Text", "Some Alt text")}
    />
  ))
  .add('FullWithImage', () => (
    <FullWithImage
      handle = {text("GraphCMS Handle of the Image", "HCgGXNqFTxOFVQa3hX4R")}
      columns = {text("Columns", "1")}
      alt = {text("Alt Text", "Some Alt text")}
      withBorder = {boolean("With border?", true)}
      withShadow = {boolean("With shadow?", true)}
    />
  ))
