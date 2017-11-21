import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import {
  Loading
} from '../../components/atoms/loading'

storiesOf('Atoms: Loading', module)
  .add('Loading', () => (<Loading/>))
