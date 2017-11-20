import React from 'react'
import styled from 'styled-components'
import { H2 } from '../atoms/typography'
import { FullWithImage } from '../atoms/images'
import { SectionCentered } from '../atoms/containers'

export const ImagesWithTitle = ({
  title,
  images
}) => (
  <StyledImagesWithTitle>
    {title &&
      <H2>{title}</H2>
    }
    { images &&
      images.map((image) => (
        <ImagePadding key={image.handle}>
          <FullWithImage handle={image.handle} withBorder={true} withShadow={true}/>
        </ImagePadding>
      )) }
  </StyledImagesWithTitle>
)

const ImagePadding = styled.div`
  padding-bottom: 5em;
  &:last-child {
    padding-bottom: 0em;
  }
`
const StyledImagesWithTitle = SectionCentered.extend`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`
