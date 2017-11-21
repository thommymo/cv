import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object} from '@storybook/addon-knobs'

import { ImagesGrid } from '../../components/molecules/images-grid'

storiesOf('Molecules: ImagesGrid', module)
  .addDecorator(withKnobs)
  .add('ImagesGrid',() =>(
    <ImagesGrid
      title={text("Title","My Images")}
      images={object("Images",[{ handle:"HCgGXNqFTxOFVQa3hX4R"},{ handle:"HCgGXNqFTxOFVQa3hX4R"},{ handle:"HCgGXNqFTxOFVQa3hX4R"},{ handle:"HCgGXNqFTxOFVQa3hX4R"}])}
      columns={text("Columns","3")}
    />
  ))
