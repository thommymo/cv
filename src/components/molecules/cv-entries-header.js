import React from 'react'
import styled from 'styled-components'
import { media } from '../../utils/breakpoints'
import { P, H1, H3, H4, H4Capitals } from '../atoms/typography'
import { TextLink } from '../atoms/buttons'
import { CSSTransition } from 'react-transition-group'
import { timeoutTransition } from '../../utils/constants'
import { HeaderTitle } from '../../components/atoms/containers'


export const CVEntriesHeader = ({
  titleleft = "",
  titleright = "",
}) => (
  <div>
    <HeaderTitle>
      <H1>Lebenslauf</H1>
    </HeaderTitle>
    <SectionFlex>
      <Header>
        <RotateLeft>
          <H3>{titleleft}</H3>
        </RotateLeft>
      </Header>
      <Header>
        <RotateRight>
          <H3>{titleright}</H3>
        </RotateRight>
      </Header>
    </SectionFlex>
  </div>
)

const SectionFlex = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
`
const Header = styled.div`
  & h3 {
    text-transform: uppercase;
    border-bottom: 3px solid ${props => props.theme.colors.blue};
    color:${props => props.theme.colors.blue};
    display: inline;
    font-size:1.1em;
    font-weight:400;
  }
`
const Rotate = styled.div`
  display: flex;
  align-items: flex-start;
  width: 150px;
  height: 50px;
`
const RotateRight = Rotate.extend`
  justify-content: flex-end;
  transform: rotate(45deg);
  text-align: right;
  ${media.desktop`margin-right: -35px; margin-top: -100px;`}
  ${media.tablet`margin-right: -35px; margin-top: -100px;`}
  ${media.phone`margin-right: -14px; margin-top: -100px;`}
  & h3 {
    border-right: 5px solid transparent;
  }
`
const RotateLeft = Rotate.extend`
  justify-content: flex-start;
  transform: rotate(-45deg);
  text-align: left;
  ${media.desktop`margin-left: -35px; margin-top: -100px;`}
  ${media.tablet`margin-left: -35px; margin-top: -100px;`}
  ${media.phone`margin-left: -14px; margin-top: -100px;`}
  & h3 {
    border-left: 5px solid transparent;
  }
`
