import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object} from '@storybook/addon-knobs'

import { LogoCloud } from '../../components/molecules/logo-cloud'

storiesOf('Molecules: LogoCloud', module)
  .addDecorator(withKnobs)
  .add('LogoCloud',() =>(
    <LogoCloud
      title={text("Title","Awards")}
      images={object("Logos",[{ handle:"jsnZ6OFJSiKMI8XKIomE"},{ handle:"ONnC5Gt6Tam0DOJDD4wJ"},{ handle:"IZu0yTbaT3GrHZOSBKtj"}])}
      height={text("Title","110")}
    />
  ))
