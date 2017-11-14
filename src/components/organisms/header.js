import React from 'react'
import styled from 'styled-components'
import {H4} from '../atoms/typography'
import { Link, NavLink } from 'react-router-dom'
import { backIcon } from '../../utils/icons'
import { black, white, green, blue, violet } from '../../utils/colors'

export const Header = ({props}) => (
  <StyledHeader gradient={props.gradient}>

    {
      props.withMainNavigation &&
      <Navigation>

        <NavLink to="/aboutme/"  activeStyle={{ borderBottom: '3px solid #000' }}><H4Black>About me</H4Black></NavLink>
        <NavLink to="/cv/"  activeStyle={{ borderBottom: '3px solid #000' }}><H4Black>CV</H4Black></NavLink>

      </Navigation>
    }
    {
      props.backlink &&
      <Navigation>
        <Link to={props.backlink}><Img src={backIcon} alt="Back link" width="40" height="40"/></Link>
      </Navigation>
    }

  </StyledHeader>
)


const Img = styled.img`
  transform: rotate(90deg);
`
const Navigation = styled.nav`
  display:flex;
`
const StyledHeader = styled.header`
  display: flex;
  color: ${black};
  width:100%;
  justify-content: center;
  a {
    text-decoration: none;
  }
  ${props => props.gradient ? `background: linear-gradient(170deg, ${green} -80%,${blue} 100%); min-height: 100px;`:'background:white'}

`
const H4Black = H4.extend`
  color:${black};
  text-decoration: none;
  padding: 0px 20px;
`
