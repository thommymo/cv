import React, {Component} from 'react'
import { sizes, imagesizes } from '../../utils/breakpoints'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { timeout, baseurl} from '../../utils/constants'

/*
 TODO: Add loading of image
 */

export const Image = (props) => (
  <picture>
    { Object.keys(sizes).map((label) => (
      <source key={imagesizes[label]}
        media={`screen
          ${sizes[label][0] ? `and (min-width:${sizes[label][0]}px)` : ""}
          ${sizes[label][1] ? `and (max-width:${sizes[label][1]}px)` : ""}
          `}
        srcSet={`
          ${baseurl}resize=height:${props.height}/${props.handle} 1x,
          ${baseurl}resize=height:${props.height*2}/${props.handle} 2x,
        `}/>
    ))}
    <img src={`${baseurl}resize=height:${props.height}/${props.handle}`} alt={props.alt}/>
  </picture>
)

/*
Images
*/

export class FullWithImage extends Component {
  //https://media.graphcms.com/[options]/[File Handle]

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
    console.log(this.state.imageLoaded)
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
          <WithBorder color={this.props.color} imageLoaded={this.state.imageLoaded}>
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
              <Img src={`${baseurl}resize=width:300/${handle}`} onLoad={this.handleImageLoaded.bind(this)}/>
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
  ${props => props.imageLoaded ? "opacity:0;" : ""};
`

const Img = styled.img`
  width:100%;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.2), 0 6px 45px 0 rgba(0, 0, 0, 0.19);
  position:relative;
  z-index: 0;
`
const ImgBlured = Img.extend`

  filter: blur(15px) brightness(0.9);
  z-index: 100000;
`
const WithBorder = styled.div`
  ${props => props.imageLoaded ? "" : "opacity:0;"};
  position:absolute;
  width:100%;
  top:0px;
  left:0px;
  &::before {
    content:'';
    width: 0;
    height: 0;
    line-height: 0;
    border-right: 120px solid transparent;
    border-top: 120px solid ${props => props.color};
    top: -40px;
    left: -40px;
    position: absolute;
    z-index: 1000;
  }
  &::after {
    content:'';
    width: 0;
    height: 0;
    line-height: 0;
    border-left: 120px solid transparent;
    border-bottom: 120px solid ${props => props.color};
    bottom: -40px;
    right: -40px;
    position: absolute;
    z-index: 1000;
  }
`
