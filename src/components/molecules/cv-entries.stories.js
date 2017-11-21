import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs'

import {CVEntries} from '../../components/molecules/cv-entries'

storiesOf('Molecules: CVEntries', module)
  .addDecorator(withKnobs)
  .add('CVEntries',() =>(
    <CVEntries
      id={text("Id","12312312312313")}
      showmore={boolean("Show More",false)}
      startDate={text("Start date","Thu Aug 31 2017 02:00:00 GMT+0200 (CEST)")}
      endDate={text("End date","Thu Aug 31 2018 02:00:00 GMT+0200 (CEST)")}
      right={boolean("Place element on the right?",false)}
      left={boolean("Place element on the left?",true)}
      bothleft={boolean("Add block on the left as well?",false)}
      bothright={boolean("Add block on the right as well?",false)}
      title={text("Title","Thomas Moser")}
      organization={text("Organization","Thomas Moser")}
      excerpt={text("Excerpt","Some additional information. I.e. what i did.")}
      addTopLeftTriangle={boolean("Add Top Left Triangle?",false)}
      addBottomLeftTriangle={boolean("Add Bottom Left Triangle?",false)}
      addTopRightTriangle={boolean("Add Top Right Triangle?",false)}
      addBottomRightTriangle={boolean("Add Bottom Right Triangle?",false)}
      furtherEducationTitle={text("Further Education Title","Further Education")}
      furtherEducationContent={text("Further Education Content","Further Education")}
    />
  ))
