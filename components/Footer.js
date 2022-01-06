import React, { Component } from 'react';
import Link from 'next/link';

import PageBox from '../components/PageBox.js'

class Footer extends Component {

    render(){
        return(
            <PageBox firstContainer="footer" className="bg-4">
                <p><Link href="/impressum" >Impressum</Link> | <Link href="/datenschutz" >Datenschutzerklärung</Link> | <Link href="/downloads" >Downloads</Link> | <Link href="/mitglied_werden" >Werde Mitglied!</Link> </p>
                <br/>
                <p style={textStyleVersion}></p>
            </PageBox>
        );
    }
}

var textStyleVersion = {
    color: "dimgrey"
}

export default Footer;