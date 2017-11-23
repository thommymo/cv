import styled from 'styled-components'
import { Link } from 'react-router-dom'

/*
  Links and Buttons
*/

export const Ghostbutton = styled(Link)`
  border:1px solid;
  padding: 5px 10px 5px 10px;
  width: auto;
  float:none;
  text-decoration: none;
`

export const TextLink = styled(Link)`
  float:none;
  text-decoration: none;
`

export const TextLinkBold =  styled.a`
  float:none;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.9em;
  padding-right: 18px;
`
