import React from "react"
import styled from "styled-components"
import { FullWithImage } from "../atoms/images"
import { H2 } from "../atoms/typography"
import { media, print } from "../../utils/breakpoints"

export const ImagesGrid = ({ title, images, columns }) => (
  <StyledImagesGrid>
    {title && <H2>{title}</H2>}
    <ImageRow>
      {images.map(image => (
        <ImageColumn columns={columns} key={image.handle}>
          <FullWithImage
            handle={image.handle}
            title={image.title}
            caption={image.caption}
            link={image.link}
            more={image.more}
            alt="Thomas beim Arbeiten"
            columns="2"
          />
        </ImageColumn>
      ))}
    </ImageRow>
  </StyledImagesGrid>
)
const StyledImagesGrid = styled.div`
  text-align: center;
`
const ImageRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const ImageColumn = styled.div`
  padding-bottom:5px;
  ${media.desktop`width: calc(100% / ${props =>
    props.columns} - 28px); padding-right: 28px;`}
  ${media.tablet`width: calc(100% / ${props =>
    props.columns} - 28px); padding-right: 28px;`}
  ${media.phone`width: 100%;`}
  & > img {
    width: 100%;
  }
  ${print.paper`width: calc(100% / ${props =>
    props.columns} - 28px); padding-right: 28px;`}
`
