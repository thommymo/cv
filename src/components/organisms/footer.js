import React from 'react'
import styled from 'styled-components'
import { H4 } from '../atoms/typography'
import { githubIcon, closeIcon } from '../../utils/icons'
import { Link } from 'react-router-dom'
import { print } from '../../utils/breakpoints'


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
        <WhiteLink to={props.backlink}>
          <H4>Zurück zum CV</H4>
          <img src={closeIcon} alt="Back link" width="40" height="40"/>
        </WhiteLink>
      </Middle>
    }


    <PrintOnlyMiddle>
      <H4>
        Thomas Moser, Bireggstrasse 33, 6003 Luzern, +41 76 380 60 08
      </H4>
    </PrintOnlyMiddle>

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
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  min-height: 95px;
  bottom: 0px;
  ${props => props.gradient ? `background: linear-gradient(165deg, ${props.theme.colors.green} -20%,${props.theme.colors.blue} 120%); min-height: 135px;`:`background:${props.theme.colors.white}`}
`
const Right = styled.div`
  padding: 12px 20px;
  flex: 1;
  text-align: right;
  ${props => props.gradient ? 'display: none;':''}
  ${print.paper`padding: 12px 10px;`}
`
const Left = styled.div`
  padding: 0 20px;
  flex: 1;
  text-align: left;
  ${props => props.gradient ? 'display: none;':''}
  ${print.paper`display: none;`}
`
const Middle = styled.div`
  padding-bottom: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  z-index:1000;
  ${print.paper`display:none;`}
`
const BlackLink = styled.a`
  color: ${props => props.theme.colors.black} !important;
  & : hover {
    opacity: 0.8;
  }
`
const WhiteLink = styled(Link)`
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  max-width: 200px;
  display:block;
  &:hover {
    opacity: 0.8;
  }
`
const PrintOnlyMiddle = Left.extend`
  visibility: none;
  padding: 12px 0px;
  flex: 5;
  ${print.paper`visibility: visible;display: block;`}
`
