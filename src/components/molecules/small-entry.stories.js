import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object} from '@storybook/addon-knobs'

import SmallEntry from '../../components/molecules/small-entry'

storiesOf('Molecules: SmallEntry', module)
  .addDecorator(withKnobs)
  .add('SmallEntry',() =>(
    <SmallEntry
      furtherEducationTitle = {text("Titwle","Lorem ipsum")}
      furtherEducationContent = {text("Further Education Content",'<p>Lorem ipsum dolor Consetetur sadipscing elitr.</p><p>Lorem ipsum dolor Sed diam nonumy. </p><p>Consetetur sadipscing elitr Sed diam nonumy.</p>')}
    />
  ))
