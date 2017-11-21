import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import {
  CVEntriesHeader
} from '../../components/molecules/cv-entries-header'

storiesOf('Molecules: CVEntriesHeader', module)
  .addDecorator(withKnobs)
  .add('CVEntriesHeader',() =>(
    <CVEntriesHeader
      titleleft = {text("Lefthand label","Arbeit")}
      titleright = {text("Righthand label","Ausbildung")}
    />
  ))
