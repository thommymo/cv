import React, {Component} from 'react'
import { sizes, imagesizes, media } from '../../utils/breakpoints'
import styled, {css} from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { timeout, baseurl} from '../../utils/constants'

/*
 TODO: Add loading of image
 */

export const Image = ({
  handle,
  height,
  alt
}) => (
  <picture>
    <source
      srcSet={`
          ${baseurl}resize=height:${height}/${handle} 1x,
          ${baseurl}resize=height:${height*2}/${handle} 2x,
        `}/>
    <img src={`${baseurl}resize=height:${height}/${handle}`} alt={alt} height={height} />
  </picture>
)

export const ImageDynWidth = ({
  handle,
  columns,
  onLoad,
  withShadow
}) => (
  <picture>
    { Object.keys(sizes).map((label) => (
      <source key={imagesizes[label]}
        media={`screen
    ${sizes[label][0] ? `and (min-width:${sizes[label][0]}px)` : ""}
    ${sizes[label][1] ? `and (max-width:${sizes[label][1]}px)` : ""}
    `}
        srcSet={`
    ${baseurl}resize=width:${imagesizes[label]/columns}/${handle} 1x,
    ${baseurl}resize=width:${imagesizes[label]*2/columns}/${handle} 2x,
  `}/>
    ))}
    <Img src={`${baseurl}resize=width:${800/columns}/${handle}`} onLoad={onLoad} withShadow={withShadow}/>
  </picture>
)

/*
Images
*/

export class FullWithImage extends Component {

  constructor(props) {
    super(props)
    this.state = { opacity: 0, imageLoaded: false }
  }

  handleImageLoaded() {
    this.setState({ imageLoaded: true })
    this.setState({ opacity: 1 })
  }

  shouldComponentUpdate(nextProps, nextState){
    return !(nextState.imageLoaded === this.state.imageLoaded);
  }

  render(){
    console.log(this.state);
    const { handle, withBorder, withShadow } = this.props
    const columns = this.props.columns ? this.props.columns : 1
    return (
      <ImagePosition>
        <CSSTransition
          in={!(this.state.imageLoaded)}
          classNames="ImageFadeIn"
          timeout={(timeout*2)}
        >
          <PreviewImage imageLoaded={this.state.imageLoaded}>
            <ImgBlured src={`${baseurl}resize=width:20/${handle}`}/>
          </PreviewImage>
        </CSSTransition>
        <CSSTransition
          in={this.state.imageLoaded}
          classNames="ImageFadeIn"
          timeout={(timeout*2)}
        >
          <WithBorder withBorder={this.props.withBorder} imageLoaded={this.state.imageLoaded}  >
            <ImageDynWidth withShadow={this.props.withShadow} columns={columns} handle={handle} onLoad={this.handleImageLoaded.bind(this)}/>
          </WithBorder>
        </CSSTransition>
      </ImagePosition>
    )
  }
}
const ImagePosition = styled.div`
  position: relative;
`
const PreviewImage = styled.div`
  ${props => props.imageLoaded ? "opacity: 0; filter: alpha(opacity=0);" : ""};
`
const Shadow = css`
  ${media.desktop`box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);`}
  ${media.tablet`box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);`}
  ${media.phone`box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 15px 0 rgba(0, 0, 0, 0.19);`}
  position:relative;
  z-index: 1;
`
const Img = styled.img`
  width:100%;
  ${props => props.withShadow ? Shadow : ""};
`
const ImgBlured = Img.extend`
  filter: blur(15px) brightness(0.9);
  z-index: 0;
`
const Border = css`
  &::before {
    content:'';
    width: 0;
    height: 0;
    line-height: 0;
    ${media.desktop`border-right-width: 120px; border-top-width: 120px; top: -40px; left: -40px;`}
    ${media.tablet`border-right-width: 100px; border-top-width: 100px; top: -30px; left: -30px;`}
    ${media.phone`border-right-width: 60px; border-top-width: 60px; top: -16px; left: -16px;`}
    border-right-style: solid;
    border-right-color: transparent;
    border-top-style: solid;
    border-top-color: ${props => props.theme.colors.primary};
    position: absolute;
    z-index: 1000;
  }
  &::after {
    content:'';
    width: 0;
    height: 0;
    line-height: 0;
    ${media.desktop`border-left-width: 120px; border-bottom-width: 120px; bottom: -40px; right: -40px;`}
    ${media.tablet`border-left-width: 100px; border-bottom-width: 100px; bottom: -30px; right: -30px;`}
    ${media.phone`border-left-width: 60px; border-bottom-width: 60px; bottom: -16px; right: -16px;`}
    border-left-style: solid;
    border-left-color: transparent;
    border-bottom-style: solid;
    border-bottom-color: ${props => props.theme.colors.primary};
    position: absolute;
    z-index: 1000;
  }
`
const WithBorder = styled.div`
  ${props => props.withBorder ? Border : ""};
  ${props => props.imageLoaded ? "" : "opacity: 0; filter: alpha(opacity=0);"};
  position:absolute;
  width:100%;
  top:0px;
  left:0px;
`
