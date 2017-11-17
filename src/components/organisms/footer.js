import React from 'react'
import styled from 'styled-components'
import { black, white, green, blue } from '../../utils/colors'
import { H4 } from '../atoms/typography'
import { githubIcon, closeIcon } from '../../utils/icons'
import { Link } from 'react-router-dom'
import { media } from '../../utils/breakpoints'

export const Footer = ({props}) => (
  <StyledFooter gradient={props.gradient} >
    { !props.gradient &&
      <Left>
        <H4>
          <a href="https://github.com/thommymo/">
            <img src={githubIcon} alt="Github icon" width="40" height="40"/>
          </a>
        </H4>
      </Left>
    }
    { props.gradient &&
      <Middle>
        <Link to={props.backlink}>
          <WhiteCapitalH4>Zurück zum CV</WhiteCapitalH4>
          <img src={closeIcon} alt="Back link" width="40" height="40"/>
        </Link>
      </Middle>
    }
    { !props.gradient &&
      <Right>
        <H4>
          <BlackLink href="mailto:mail@thomasmoser.ch">mail@thomasmoser.ch</BlackLink>
        </H4>
      </Right>
    }
  </StyledFooter>
)

const StyledFooter = styled.footer`
  color: ${black};
  background-color: ${white};
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  min-height: 95px;
  bottom: 0px;
  ${props => props.gradient ? `background: linear-gradient(165deg, ${green} -20%,${blue} 120%); min-height: 135px;`:`background:${white}`}
`
const Right = styled.div`
  padding: 12px 20px;
  flex: 1;
  text-align: right;
  ${props => props.gradient ? 'display: none;':''}
`
const Left = styled.div`
  padding: 0 20px;
  flex: 1;
  text-align: left;
  ${props => props.gradient ? 'display: none;':''}
`
const Middle = styled.div`
  padding-bottom: 20px;
  flex: 1;
  text-align: center;
`
const BackLink = styled.a`
  color: ${black} !important;
  &: hover {
    opacity: 0.8;
  }
`
const BlackLink = styled.a`
  color: ${black} !important;
  & : hover {
    opacity: 0.8;
  }
`
const WhiteCapitalH4 = H4.extend`
  text-transform: uppercase;
  color: ${white};
  padding-bottom: 0px;
  &:hover {
    opacity: 0.8;
  }
`
