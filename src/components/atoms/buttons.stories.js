import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  Ghostbutton,
  TextLink,
  TextLinkBold
} from '../../components/atoms/buttons'

storiesOf('Atoms: Buttons', module)
  .add('Ghostbutton',() =>(
    <Ghostbutton to="#">Sometext</Ghostbutton>
  ))
  .add('TextLink',() =>(
    <TextLink to="#">Sometext</TextLink>
  ))
  .add('TextLinkBold',() =>(
    <TextLinkBold to="#">Sometext</TextLinkBold>
  ))
