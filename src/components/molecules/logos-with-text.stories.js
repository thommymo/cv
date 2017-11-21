import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object} from '@storybook/addon-knobs'

import { LogosWithText } from '../../components/molecules/logos-with-text'

storiesOf('Molecules: LogosWithText', module)
  .addDecorator(withKnobs)
  .add('LogosWithText',() =>(
    <LogosWithText
      title = {text("Title","Lorem ipsum")}
      logos = {object("Logos with description", [{logo: {handle: "YRMPWRWkQYuSgcPBFfT6"}, description: "At vero eos et accusam et justo duo dolores et ea rebum."},{logo: {handle: "WTEDLoc2RleNnxlxG23R"}, description: "At vero eos et accusam et justo duo dolores et ea rebum."},{logo: {handle: "ONnC5Gt6Tam0DOJDD4wJ"}, description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."}])}
    />
  ))
