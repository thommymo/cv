import React from 'react'
import styled from 'styled-components'
import {H4} from '../atoms/typography'
import { Link, NavLink } from 'react-router-dom'
import { backIcon } from '../../utils/icons'
import { black, white } from '../../utils/colors'

export const Header = ({props}) => (
  <StyledHeader>
    <Backlink>
      {
        props.backlink &&
        <Link to={props.backlink}><img src={backIcon} alt="Back link" width="40" height="40"/></Link>
      }
    </Backlink>
    {
      props.withMainNavigation &&
      <Navigation>

        <NavLink to="/home" activeStyle={{ borderBottom: '3px solid #000' }}><H4Black>Application</H4Black></NavLink>
        <NavLink to="/aboutme/"  activeStyle={{ borderBottom: '3px solid #000' }}><H4Black>About me</H4Black></NavLink>
        <NavLink to="/cv/"  activeStyle={{ borderBottom: '3px solid #000' }}><H4Black>CV</H4Black></NavLink>

      </Navigation>
    }
    <NextLink>
      {
        props.nextlink &&
        <Link to={props.nextlink}><img src={backIcon} alt="Next icon" width="40" height="40"/></Link>
      }
    </NextLink>
  </StyledHeader>
)

const Backlink = styled.div`
  padding-left:10px;
`
const NextLink = styled.div`

`
const Navigation = styled.div`
  display:flex;
`
const StyledHeader = styled.header`
  color: ${black};
  background-color: ${white};
  width:100%;
  display:flex;
  align-items: center;
  justify-content: space-between;
  min-height:60px;
  a {
    text-decoration: none;
  }
`
const H4Black = H4.extend`
  color:${black};
  text-decoration: none;
  padding: 0px 20px;
`
