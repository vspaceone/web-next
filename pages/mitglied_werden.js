import React, { Component } from 'react';
import Link from 'next/link';
//import ReactPiwik from 'react-piwik';

import PageBox from '../components/PageBox.js'

class MitgliedWerden extends Component {

    componentDidMount(){
      //ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <PageBox firstH="1" title="Mitglied Werden" className="bg-3">
                <div className="row">
                    <div className="offset-sm-2 col-sm-8">
                        Lade dir unter <Link href="/downloads" >Downloads</Link> die Beitrittserklärung herunter, bring sie mit in den Space und drücke sie einem der Vorstände in die Hände. Dafür eignet sich beispielsweise das regelmäßig stattfindende Treffen
                        am Dienstagabend.
                        <br/><br/>
                        Alternativ schicke sie an folgende Adresse:<br/><br/> vspace.one e.V <br/> Wilhelm-Binder-Str. 19 <br/> 78048 Villingen
                        <br/><br/>
                        Oder an folgende E-Mail Adresse:<br/><br/>
                        <a href="mailto:vorstand@vspace.one">vorstand [at] vspace.one</a>
                    </div>
                </div>
            </PageBox> 
        );
    }
}

export default MitgliedWerden;