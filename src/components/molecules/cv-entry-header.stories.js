import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { CVEntryHeader } from '../../components/molecules/cv-entry-header'



storiesOf('Molecules: CVEntryHeader', module)
  .addDecorator(withKnobs)
  .add('CVEntryHeader',() =>(
    <CVEntryHeader
      title={text("Title","Thomas Moser")}
      startDate={text("Start date","Thu Aug 31 2017 02:00:00 GMT+0200 (CEST)")}
      endDate={text("End date","Thu Aug 31 2018 02:00:00 GMT+0200 (CEST)")}
      organization={text("Organization","UBS")}
    />
  ))
