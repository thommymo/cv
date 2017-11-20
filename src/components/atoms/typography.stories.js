import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  H1,
  H2,
  H3,
  H3Capitals,
  H4,
  H4Capitals,
  Small,
  P,
  PCapitals
} from '../../components/atoms/typography'


storiesOf('Typography', module)
  .add('H1',() =>(
    <H1>Sometext</H1>
  ))
  .add('H2',() =>(
    <H2>Sometext</H2>
  ))
  .add('H3',() =>(
    <H3>Sometext</H3>
  ))
  .add('H3Capitals',() =>(
    <H3Capitals>Sometext</H3Capitals>
  ))
  .add('H4',() =>(
    <H4>Sometext</H4>
  ))
  .add('H4Capitals',() =>(
    <H4Capitals>Sometext</H4Capitals>
  ))
  .add('Small',() =>(
    <Small>Sometext</Small>
  ))
  .add('P',() =>(
    <P>Sometext</P>
  ))
  .add('PCapitals',() =>(
    <PCapitals>Sometext</PCapitals>
  ))
