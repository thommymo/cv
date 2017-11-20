import React from 'react'
import styled from 'styled-components'
import { Small, H3Capitals } from '../../components/atoms/typography'
import { media } from '../../utils/breakpoints'

export const TextWithLabel = ({
  label,
  children
}) => (
  <Row>
    <ColumnLabel>
      <Small><H3Capitals>{label}</H3Capitals></Small>
    </ColumnLabel>
    <ColumnDescription>
      {children}
    </ColumnDescription>
  </Row>
)

const Row = styled.div`
  ${media.desktop`display:flex;`}
  margin-bottom:2em;
  max-width: 800px;
  margin: 1em auto;
`
const ColumnLabel = styled.div`
  ${media.desktop`padding-top:8px; text-align: right; padding-right: 40px;`}
  flex:1;
`
const ColumnDescription = styled.div`
  flex:3;
`
