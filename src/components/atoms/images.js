import React, {Component} from 'react'
import { sizes, imagesizes, media } from '../../utils/breakpoints'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { timeout, baseurl} from '../../utils/constants'

/*
 TODO: Add loading of image
 */

export const Image = (props) => (
  <picture>
    <source
      srcSet={`
          ${baseurl}resize=height:${props.height}/${props.handle} 1x,
          ${baseurl}resize=height:${props.height*2}/${props.handle} 2x,
        `}/>
    <img src={`${baseurl}resize=height:${props.height}/${props.handle}`} alt={props.alt} height={props.height} />
  </picture>
)

/*
Images
*/

export class FullWithImage extends Component {

  constructor(props) {
    super(props)
    this.state = { imageLoaded: false }
    this.state = { opacity: 0 }
  }

  handleImageLoaded() {
    this.setState({ imageLoaded: true })
    this.setState({ opacity: 1 })
  }

  shouldComponentUpdate(nextProps, nextState){
    return !(nextState.imageLoaded === this.state.imageLoaded);
  }

  render(){
    const handle = this.props.handle
    return (
      <ImagePosition>
        <CSSTransition
          in={!(this.state.imageLoaded)}
          classNames="ImageFadeIn"
          timeout={(timeout*2)}
        >
          <PreviewImage imageLoaded={this.state.imageLoaded}>
            <picture>
              { Object.keys(sizes).map((label) => (

                <source key={imagesizes[label]}
                  media={`screen
              ${sizes[label][0] ? `and (min-width:${sizes[label][0]}px)` : ""}
              ${sizes[label][1] ? `and (max-width:${sizes[label][1]}px)` : ""}
              `}
                  srcSet={`
              ${baseurl}resize=width:20/${handle} 1x,
              ${baseurl}resize=width:20/${handle} 2x,
            `}/>
              ))}
              <ImgBlured src={`${baseurl}resize=width:20/${handle}`}/>
            </picture>
          </PreviewImage>

        </CSSTransition>
        <CSSTransition
          in={this.state.imageLoaded}
          classNames="ImageFadeIn"
          timeout={(timeout*2)}
        >
          <WithBorder imageLoaded={this.state.imageLoaded}>
            <picture>
              { Object.keys(sizes).map((label) => (

                <source key={imagesizes[label]}
                  media={`screen
              ${sizes[label][0] ? `and (min-width:${sizes[label][0]}px)` : ""}
              ${sizes[label][1] ? `and (max-width:${sizes[label][1]}px)` : ""}
              `}
                  srcSet={`
              ${baseurl}resize=width:${imagesizes[label]}/${handle} 1x,
              ${baseurl}resize=width:${imagesizes[label]*2}/${handle} 2x,
            `}/>
              ))}
              <Img src={`${baseurl}resize=width:800/${handle}`} onLoad={this.handleImageLoaded.bind(this)}/>
            </picture>
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
const Img = styled.img`
  width:100%;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
  ${media.desktop`box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);`}
  ${media.tablet`box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);`}
  ${media.phone`box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 15px 0 rgba(0, 0, 0, 0.19);`}
  position:relative;
  z-index: 0;
`
const ImgBlured = Img.extend`

  filter: blur(15px) brightness(0.9);
  z-index: 100000;
`
const WithBorder = styled.div`
  ${props => props.imageLoaded ? "" : "opacity: 0; filter: alpha(opacity=0);"};
  position:absolute;
  width:100%;
  top:0px;
  left:0px;
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
