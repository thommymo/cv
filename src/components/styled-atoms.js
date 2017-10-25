import React, { Component } from 'react'
import { media } from '../utils/breakpoints'
import styled from 'styled-components'

//Typography

export const StyledH1 = styled.h1`
  ${media.desktop`font-size: 3em;`}
  ${media.tablet`font-size: 2.5em;`}
  ${media.phone`font-size: 2em;`}
  ${media.desktop`line-height: 1.05em;`}
  ${media.tablet`line-height: 1.25em;`}
  ${media.phone`line-height: 1.25em;`}
`
export const StyledH2 = styled.h2`
  ${media.desktop`font-size: 2.25em;`}
  ${media.tablet`font-size: 2em;`}
  ${media.phone`font-size: 1.625em;`}
  ${media.desktop`line-height: 1.25em`}
  ${media.tablet`line-height: 1.25em`}
  ${media.phone`line-height: 1.15384615em;`}
`
export const StyledH3 = styled.h3`
  ${media.desktop`font-size: 1.75em;`}
  ${media.tablet`font-size: 1.5em;`}
  ${media.phone`font-size: 1.375em`}
  ${media.desktop`line-height: 1.25em`}
  ${media.tablet`line-height: 1.25em`}
  ${media.phone`line-height: 1.13636364em`}
`
export const StyledH4 = styled.h4`
  ${media.desktop`font-size: 1.125em`}
  ${media.tablet`font-size: 1.125em`}
  ${media.phone`font-size: 1.125em`}
  ${media.desktop`line-height: 1.22222222em`}
  ${media.tablet`line-height: 1.22222222em`}
  ${media.phone`line-height: 1.11111111em`}
`
export const StyledP = styled.p`
  ${media.desktop`font-size: 1em;`}
  ${media.tablet`font-size: 1em;`}
  ${media.phone`font-size: 1em;`}
  ${media.desktop`line-height: 1.22222222em`}
  ${media.tablet`line-height: 1.22222222em`}
  ${media.phone`line-height: 1.11111111em`}
`
export const TimeSpan = ({show = false, startDate = false, endDate = false}) => (
    <StyledTimeSpan show={show}>
      { startDate &&
        <span>{startDate}</span>
      }
      { startDate && endDate &&
        <span>&#8599;</span>
      }
      { endDate &&
        <span>{endDate}</span>
      }
    </StyledTimeSpan>
);

export const StyledTimeSpan = StyledH4.extend`
  height:2.6em;
  display:flex;
  justify-content: center;
  flex-direction: column;

  vertical-align: middle;
  text-align: center;
  ${media.desktop`line-height: 1em;`}
  ${media.tablet`line-height: 1em;`}
  ${media.phone`line-height: 1em;`}
  ${props => !props.show ? 'display:none' : ''};
`
