import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object} from '@storybook/addon-knobs'

import { ImagesWithTitle } from '../../components/molecules/images-with-title'

storiesOf('Molecules: ImagesWithTitle', module)
  .addDecorator(withKnobs)
  .add('ImagesWithTitle',() =>(
    <ImagesWithTitle
      title={text("Title","My Images")}
      images={object("Logos",[{ handle:"HCgGXNqFTxOFVQa3hX4R"},{ handle:"HCgGXNqFTxOFVQa3hX4R"}])}
    />
  ))
