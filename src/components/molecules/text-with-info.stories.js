import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object} from '@storybook/addon-knobs'

import {
  TextWithInfo
} from '../../components/molecules/text-with-info'

import {
  P
} from '../../components/atoms/typography'

storiesOf('Molecules: TextWithInfo', module)
  .addDecorator(withKnobs)
  .add('TextWithInfo',() =>(
    <TextWithInfo
      title = {text("Title","Lorem ipsum")}
      description = {
        object("Description",{ __html: '<p>Lorem ipsum dolor Consetetur sadipscing elitr Sed diam nonumy</p><h3>Et ea rebum</h3><p>Kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>'})}
      infoTitle = {text("Info title","Sprache")}
      infoDescrition = {
        object("Infod description",{__html: '<p>Lorem ipsum dolor Consetetur sadipscing elitr. Lorem ipsum dolor Sed diam nonumy. Consetetur sadipscing elitr Sed diam nonumy.</p><h3>Et ea rebum</h3><p>Kasd gubergren, Lorem ipsum dolor Consetetur sadipscing elitr Sed diam nonumy. No sea takimata sanctus est Lorem ipsum dolor sit amet.</p>'})}
      infoTitle = {text("Info title","Sprache")}
    />
  ))
