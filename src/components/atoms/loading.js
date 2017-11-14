import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { timeoutTransition } from '../../utils/constants'
import { loadingIcon } from '../../utils/icons'

/*
  Loading Animations
*/

export const Loading = () => (
    <CSSTransition
      in
      appear={true}
      timeout={timeoutTransition}
      classNames="SlideIn"
      unmountOnExit={true}
    >
      <MainDiv><img src={loadingIcon} width="38" height="38" alt="Loading icon"/></MainDiv>
    </CSSTransition>
)

const MainDiv = styled.div`
  position:absolute;
  top:0px;
  bottom:0px;
  left:0px;
  min-width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
