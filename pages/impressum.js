import React, { Component } from 'react';
//import ReactPiwik from 'react-piwik';

import PageBox from '../components/PageBox.js'

class Impressum extends Component {

    componentDidMount(){
      //ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <PageBox firstH="1" title="Impressum" className="bg-2">
                <h2>Angaben gemäß § 5 TMG:</h2>
                <p>vspace.one e.V.<br /> Wilhelm-Binder-Str. 19<br /> 78048 Villingen
                </p>
                <h2>Vertreten durch:</h2>
                <p>Damian Jesionek<br />Linus Dold<br />Lukas Timmermann<br />Nikolai Müller</p>
                <h2>Kontakt:</h2>
                <p>
                    Telefon: 07721 2968141<br />
                    E-Mail: vorstand [at] vspace.one
                </p>
                <h2>Datenschutzerklärung</h2>
                <p>Es gilt die folgenden <a href="?page=datenschutzerklärung" style={{color: '#ffffff'}}>Datenschutzerklärung</a>.</p>
                <p></p>
                <h2>Registereintrag:</h2>
                <p>Eintragung im Vereinsregister. <br />Registergericht: Amtsgericht Freiburg <br />Registernummer: VR 701636</p>
                <p> </p>
                <p>Steuernummer: 22102/71153</p>
                <p> </p>
                <p>Quelle: <em><a href="https://www.e-recht24.de" style={{color: '#ffffff'}}>eRecht24</a></em></p>
            </PageBox>
        );
    }
}

export default Impressum;