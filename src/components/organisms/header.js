import React from 'react'
import styled from 'styled-components'
import {H4} from '../atoms/typography'
import { Link, NavLink } from 'react-router-dom'
import { closeIcon } from '../../utils/icons'

export const Header = ({props}) => (
  <StyledHeader gradient={props.gradient}>

    {
      props.withMainNavigation &&
      <Navigation>
        <NavLink to="/aboutme/"  activeStyle={{ borderBottom: '3px solid #000', borderLeft: '5px solid transparent' }}><H4Black>Über mich</H4Black></NavLink>
        <NavLink to="/cv/"  activeStyle={{ borderBottom: '3px solid #000', borderLeft: '5px solid transparent' }}><H4Black>Lebenslauf</H4Black></NavLink>
      </Navigation>
    }
    {
      props.backlink &&
      <Navigation>
        <Link to={props.backlink}><Img src={closeIcon} alt="Back link" width="40" height="40"/></Link>
      </Navigation>
    }
  </StyledHeader>
)


const Img = styled.img`
  padding-top: 10px;
`
const Navigation = styled.nav`
  display:flex;
`
const StyledHeader = styled.header`
  display: flex;
  color:${props => props.theme.colors.black};
  width:100%;
  justify-content: center;
  a {
    text-decoration: none;
  }
  ${props => props.gradient ? `background: linear-gradient(165deg, ${props.theme.colors.green} -20%,${props.theme.colors.blue} 120%); min-height: 100px;`:`background:${props.theme.colors.white}`}

`
const H4Black = H4.extend`
  color:${props => props.theme.colors.black};
  text-decoration: none;
  padding: 0px 20px;
`
