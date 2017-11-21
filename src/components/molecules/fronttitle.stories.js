import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { FrontTitle } from '../../components/molecules/fronttitle'

storiesOf('Molecules: FrontTitle', module)
  .addDecorator(withKnobs)
  .add('FrontTitle',() =>(
    <FrontTitle
      title={text("Title","Thomas Moser")}
      subtitle={text("Subtitle","Frontend Web Developer")}
    />
  ))
