import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import {
  TextWithLabel
} from '../../components/molecules/text-with-label'

import {
  P
} from '../../components/atoms/typography'

storiesOf('Molecules: TextWithLabel', module)
  .addDecorator(withKnobs)
  .add('TextWithLabel',() =>(
    <TextWithLabel
      label = {text("Label","Sprache")}
    >
      <P>{text("Children","Lorem Ipsum dolor sit ahmet")}</P>
    </TextWithLabel>
  ))
