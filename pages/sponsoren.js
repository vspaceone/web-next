import React, { Component } from 'react';
import Image from 'next/image';
//import ReactPiwik from 'react-piwik';

import PageBox from '../components/PageBox.js'

import netcupLogoImage from '../public/pic/sponsors/netcup_logo_RGB_color.svg'
import infoImage from '../public/pic/sponsors/undraw_businessman_re_mlee.svg'

class Sponsoren extends Component {

    componentDidMount(){
      //ReactPiwik.push(['trackPageView'])
    }

    render() {

        let netcupLinkParams = {
            href: "https://www.netcup.de/",
            target: "_blank",
            rel: "noopener noreferrer"
        } 

        let netcupLogo = <a {...netcupLinkParams}><Image alt="Netcup Logo" layout="intrinsic" src={netcupLogoImage}></Image></a>
        let netcupText = <p><a {...netcupLinkParams}>netcup.de – Ihr Ansprechpartner für qualitatives Webhosting, Servermanagement, Colocation und weitere Internetdienstleistungen</a> für einen erfolgreichen, zuverlässigen und sicheren Internetauftritt.</p>

        let infoLogo = <Image alt="Kooperation Symbolbild" layout="intrinsic" src={infoImage}></Image>
        let infoText = <p>Interesse an einer Kooperation?<br></br>Dann kontaktiere uns über <a href="mailto:vorstand@vspace.one">vorstand [at] vspace.one</a></p>

        return (
            <PageBox firstH="1" title="Unsere Sponsoren" className="bg-3">
                <div style={{marginBottom: '5rem'}}></div>
                <Sponsor num={0} logo={netcupLogo} text={netcupText} />
                <div style={{marginBottom: '20rem'}}></div>
                <Sponsor num={1} logo={infoLogo} text={infoText} />
            </PageBox>
        );
    }
}

export default Sponsoren;

class Sponsor extends Component {

    constructor(props){
        super(props)
    }

    render() {

        let key = this.props.num
        let logoFirst = (key%2 === 0)
        let logo = this.props.logo
        let text = this.props.text
        
        let itemStyle = {textAlign:'center'}

        let bigView = (
            <div className="row">
                <div {...itemStyle} className="col-12 col-md-8">
                    {logo}
                </div>
                <div {...itemStyle} className="col-12 col-md-4">
                    {text}
                </div>
            </div>
        )

        /*let smallView = (
            <div className="row d-md-none">
                <div {...itemStyle} className="col-12">
                    {logo}
                </div>
                <div {...itemStyle} className="col-12">
                    {text}
                </div>
            </div>  
        )*/

        return (
            <div className="container-xl" style={{marginBottom: '10rem'}}>
                {bigView}
            </div>
        );
    }
}
