import React, { Component } from 'react';
import Image from 'next/image';

import Particles from 'react-tsparticles';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class HomeJumbo extends Component {

  constructor(props) {
    super(props);
    //this.state = { windowWidth: window.innerWidth };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  render() {

    const showButtons = false;

    const boxHeight = '670px';

    const h1Style = { textShadow: "2px 2px 4px black" };

    const linkStyle = {
      color: "white",
      textDecoration: ""
    }

    const images = [
      "/pic/vspaceone_prusa_mk3s_small.jpg",
      "/pic/vspaceone_4bit_adder_small.jpg",
      "/pic/vspaceone_motoren_small.jpg",
      "/pic/vspaceone_cap_drawers_small.jpg",
      "/pic/vspaceone_big_psu_small.jpg",
      "/pic/vspaceone_scope_small.jpg"
    ]

//<div style={ zIndex: "1", overflow: "hidden", backgroundSize: "cover", objectFit: "contain", backgroundPosition: "center", backgroundImage: `url(${image})`, height: boxHeight }}></div>
    return (
      <div
        className="container-fluid bg-1 text-center"
        style={{
          position: 'relative',
          padding: 0,
          height: boxHeight,
          overflow: "hidden"
        }}
      >
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={images.length}
          infinite={true}
          interval={10000}
          isPlaying={true}
        >
          <Slider style={{ height: boxHeight }}>
            <>
              {images.map((image, idx) => (
                <Slide key={idx} index={idx}>
                  <Image src={image}></Image>
                </Slide>
              ))}
            </>
          </Slider>
          <div style={{ display: showButtons ? "flex" : "none", justifyContent: "center", position: "absolute", zIndex: 15, top: 0, left: 0, height: boxHeight, width: "100%" }}>
            <DotGroup style={{ zIndex: 10 }} />
          </div>
        </CarouselProvider>
        <Particles
          canvasClassName="particlesCanvas"
          height={boxHeight}
          params={particleConfig}
        />
        <div
          id="particles-overlay"
          style={{
            height: boxHeight,
            paddingTop: '30px',
            zIndex: 10,
            position: 'absolute',
            width: '100%',
            top: 0
          }}
        >
          <h1 className="margin" style={h1Style}>Was ist der vspace.one?</h1>
          <Image
            src="/pic/logo_vspaceone.svg"
            className="img-responsive img-circle margin"
            alt="Bird" width="350" height="350"
            style={{
              verticalAlign: 'middle',
              display: 'inline'
            }} />
          <h1 style={h1Style}>
            Ein <i><a style={linkStyle} href="https://de.wikipedia.org/wiki/FabLab" >Makerspace </a></i>
                    und <i><a style={linkStyle} href="https://de.wikipedia.org/wiki/Hackerspace" >Hackerspace</a></i>.
                </h1>
        </div>
      </div>
    );
  }
}

export default HomeJumbo;

var particleConfig = {
  "particles": {
    "number": {
      "value": 100,
    },
    "color": {
      "value": "#0ac26c"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1,
        "color": "#0ac26c"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.3,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#0ac26c",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "retina_detect": true
}
