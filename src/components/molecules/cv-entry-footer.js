import styled from 'styled-components'
import { media, print } from '../../utils/breakpoints'

export const CVEntryFooter = styled.div`
  border: solid 0px;
  border-bottom-width: 40px;
  border-bottom-color: transparent;
  border-left-width: 40px;
  border-left-color: ${props=>props.theme.colors.primary};
  border-right-width: 40px;
  border-right-color: ${props=>props.theme.colors.primary};
  position: relative;
  z-index: 1000;
  ${media.desktop`box-shadow: 700px 0px ${props=>props.theme.colors.primary}, -700px 0px ${props=>props.theme.colors.primary}; `}
  ${media.tablet`box-shadow: 300px 0px ${props=>props.theme.colors.primary}, -300px 0px ${props=>props.theme.colors.primary}; `}
  ${media.phone`box-shadow: 100px 0px ${props=>props.theme.colors.primary}, -100px 0px ${props=>props.theme.colors.primary}; `}
  ${print.paper`box-shadow: none;border:none`}
`
