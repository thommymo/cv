import React from 'react'
import styled from 'styled-components'
import { SectionCentered } from '../atoms/containers'
import { Image } from '../atoms/images'
import { H2 } from '../atoms/typography'
import { media } from '../../utils/breakpoints'

export const LogoCloud = (props) => (
  <div>
    <H2>{props.title}</H2>
    <RowLogos>
      {props.images.map((image) => (
        <Logo key={image.handle}>
          <Image handle={image.handle} height={props.height} />
        </Logo>
      ))}
    </RowLogos>
  </div>
)

const RowImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const RowLogos = RowImages.extend`
  max-width: 600px;
  margin: 0 auto;
`
const Logo = styled.div`
  padding: 5px 10px 0 0;
`
