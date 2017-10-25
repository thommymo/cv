import React, { Component } from 'react'
import styled from 'styled-components'
import { primaryDark, white } from '../utils/colors'
import { media } from '../utils/breakpoints'
import { StyledP, StyledH3, TimeSpan} from '../components/styled-atoms'

class Timeline extends Component {
  render() {
    return (
      <Lap>
        <TimeSpan
          show={this.props.left}
          right={this.props.right}
          left={this.props.left}
          bothright={this.props.bothright}
          bothleft={this.props.bothleft}
          startDate={this.props.startDate}
          endDate={this.props.endDate}
        />
        <Content
          left={this.props.left}
          right={this.props.right}
          top={this.props.top}
          bottom={this.props.bottom}
          borderTopLeftRadius={this.props.borderTopLeftRadius}
          borderTopRightRadius={this.props.borderTopRightRadius}
          borderBottomLeftRadius={this.props.borderBottomLeftRadius}
          borderBottomRightRadius={this.props.borderBottomRightRadius}
        >
          <StyledTitle>{this.props.title}</StyledTitle>
          <AdditionalInfo
            left={this.props.left}
            right={this.props.right}
          >
            { this.props.company &&
              <AdditionalInfoItem>
                <img alt="company"
                  src="data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22%23FFFFFF%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M12%207V3H2v18h20V7H12zM6%2019H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4%2012H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10%2012h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0%204h-2v2h2v-2z%22%2F%3E%0D%0A%3C%2Fsvg%3E"
                />
                <AdditionalInfoP>{this.props.company}</AdditionalInfoP>
              </AdditionalInfoItem>
            }
            { this.props.school &&
              <AdditionalInfoItem>
                <img alt="school" src="data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22%23FFFFFF%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M4%2010v7h3v-7H4zm6%200v7h3v-7h-3zM2%2022h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2%206v2h19V6l-9.5-5z%22%2F%3E%0D%0A%3C%2Fsvg%3E"/>
                <AdditionalInfoP>{this.props.school}</AdditionalInfoP>
              </AdditionalInfoItem>
            }
            { this.props.responsibility &&
              <AdditionalInfoItem>
                <img alt="responsibility"
                  src="data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22%23FFFFFF%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M20%206h-4V4c0-1.11-.89-2-2-2h-4c-1.11%200-2%20.89-2%202v2H4c-1.11%200-1.99.89-1.99%202L2%2019c0%201.11.89%202%202%202h16c1.11%200%202-.89%202-2V8c0-1.11-.89-2-2-2zm-6%200h-4V4h4v2z%22%2F%3E%0D%0A%3C%2Fsvg%3E"
                />
                <AdditionalInfoP>{this.props.responsibility}</AdditionalInfoP>
              </AdditionalInfoItem>
            }
            { this.props.learned &&
              <AdditionalInfoItem>
                <img alt="learned"
                  src="data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22%23FFFFFF%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M12%2011.55C9.64%209.35%206.48%208%203%208v11c3.48%200%206.64%201.35%209%203.55%202.36-2.19%205.52-3.55%209-3.55V8c-3.48%200-6.64%201.35-9%203.55zM12%208c1.66%200%203-1.34%203-3s-1.34-3-3-3-3%201.34-3%203%201.34%203%203%203z%22%2F%3E%0D%0A%3C%2Fsvg%3E"
                />
                <AdditionalInfoP>{this.props.learned}</AdditionalInfoP>
              </AdditionalInfoItem>
            }
            {this.props.more &&
              <StyledP>More &#8599;</StyledP>
            }
          </AdditionalInfo>
        </Content>
        <TimeSpan
          show={this.props.right}
          right={this.props.right}
          left={this.props.left}
          bothright={this.props.bothright}
          bothleft={this.props.bothleft}
          startDate={this.props.startDate}
          endDate={this.props.endDate}
        />
      </Lap>
    )
  }
}

const AdditionalInfoItem = styled.div`
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`
const AdditionalInfoP = StyledP.extend`
  margin: 0 10px;
`

const AdditionalInfo = styled.div`
  margin-top:-30px;
  display:flex;
  ${props => props.right ? 'flex-direction:row-reverse' : ''};
`

const Lap = styled.div`
  display: flex;
  background-color: ${primaryDark};
  width: 100%;
`
const Content = styled.div`
  padding: 0 20px 0 20px;
  color: ${white};
  min-height: 50px;
  ${props => props.left ? `border-left: solid; border-left-width: 6px; border-left-color: ${white}; margin-right:30px;` : ''};
  ${props => props.right ? `border-right: solid; border-right-width: 6px; border-right-color: ${white}; margin-left:30px; text-align:right;` : ''};
  ${props => props.top ? `border-top: solid; border-top-width: 6px; border-top-color: ${white}; margin-top:-6px;` : ''};
  ${props => props.bottom ? `border-bottom: solid; border-bottom-width: 6px; border-bottom-color: ${white}; margin-top:-6px;` : ''};
  ${props => props.borderTopLeftRadius ? 'border-top-left-radius: 30px;':''};
  ${props => props.borderTopRightRadius ? 'border-top-right-radius: 30px;':''};
  ${props => props.borderBottomLeftRadius ? 'border-bottom-left-radius: 30px;':''};
  ${props => props.borderBottomRightRadius ? 'border-bottom-right-radius: 30px;':''};
  flex:1;
`
const StyledTitle = StyledH3.extend`
  ${media.desktop`margin-top: 28px;`}
  ${media.tablet`margin-top: 31px;`}
  ${media.phone`margin-top: 34px;`}
`

export default Timeline
