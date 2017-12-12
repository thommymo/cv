import React from 'react'
import styled from 'styled-components'
import { Image } from '../atoms/images'
import { H2 } from '../atoms/typography'
import {print} from '../../utils/breakpoints'

export const LogoCloud = ({
  title,
  images,
  height
}) => (
  <StyledLogoCloud>
    <H2>{title}</H2>
    <RowLogos>
      {images.map((image) => (
        <Logo key={image.handle}>
          <Image handle={image.handle} height={height} />
        </Logo>
      ))}
    </RowLogos>
  </StyledLogoCloud>
)
const StyledLogoCloud = styled.div`
  text-align: center;
`
const RowImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const RowLogos = RowImages.extend`
  max-width: 600px;
  margin: 0 auto;
  ${print.paper`max-width: 100%;`}
`
const Logo = styled.div`
  padding: 5px 10px 0 0;
`
