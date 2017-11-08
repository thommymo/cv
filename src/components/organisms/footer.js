import React from 'react'
import styled from 'styled-components'
import { black, white } from '../../utils/colors'
import { H4 } from '../../components/atoms/typography'
import { githubIcon } from '../../utils/icons'



export const Footer = () => (
  <StyledFooter>
    <Left>
      <H4>
        <a href="https://github.com/thommymo/">
          <img src={githubIcon} alt="Github icon" width="40" height="40"/>
        </a>
      </H4>
    </Left>
    <Right>
      <H4>
        <BlackLink href="mailto:mail@thomasmoser.ch">mail@thomasmoser.ch</BlackLink>
      </H4>
    </Right>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  color: ${black};
  background-color: ${white};
  width:100%;
  display:flex;
  align-items: center;
  position:relative;
  min-height:60px;
  bottom:0px;
`
const Right = styled.div`
  padding: 0 20px;
  flex:1;
  text-align:right;
`
const Left = styled.div`
  padding: 0 20px;
  flex:1;
  text-align:left;
`
const BlackLink = styled.a`
  color: ${black} !important;
  &:hover {
    opacity:0.8;
  }
`
