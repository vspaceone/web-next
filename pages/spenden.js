import React, { Component } from 'react';
import Image from 'next/image';
//import ReactPiwik from 'react-piwik';

import PageBox from '../components/PageBox.js'

class Spenden extends Component {

    componentDidMount(){
      //ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <PageBox firstH="1" title="Spenden" className="bg-3">
                <div style={{marginBottom: '2rem'}} className="row">
                    <div style={{textAlign:'left'}} className="col-sm-12">
                        <p>
                        Wir sind froh über jede Spende, die bei uns ankommt. Als gemeinnütziger Verein können wir selbstverständlich auf Wunsch Spendenbescheinigungen ausstellen. 
                        Melde Dich dazu nach erfolgter Überweisung per E-Mail an vorstand [at] vspace.one und nenne uns Deine Kontaktdaten sowie die IBAN mit Betrag damit wir die Spende zuordnen können.
                        <br/>
                        Dazu könnt Ihr uns einfach den gewählten Betrag mit dem Betreff &quot;Spende&quot; überweisen. 
                        Zweckgebundene Spenden nimmt der Vorstand nach erfolgter Absprache an, sofern der Zweck mit der Satzung kompatibel ist.
                        </p>
                    </div>
                </div>
                <div style={{marginBottom: '2rem'}} className="row">
                    <div style={{textAlign:'center'}} className="col-sm-12">
                        <p>
                        QR-Code mit Kontodaten:<br/>
                        <Image alt="Bankdaten in QR-Code" width="200rem" height="200rem" src="/pic/donation-qr-code.png"/>
                        </p>
                    </div>
                </div>
                <div style={{marginBottom: '2rem'}} className="row">
                    <div style={{textAlign:'left'}} className="col-sm-12">
                        <p>
                        Kontodaten zum Selbsteingeben:<br/>
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>Inhaber</td>
                                        <td>vspace.one e. V.</td>
                                    </tr>
                                    <tr>
                                        <td>Bank</td>
                                        <td>Volksbank eG - Die Gestalterbank</td>
                                    </tr>
                                    <tr>
                                    <   td>IBAN</td>
                                        <td>DE76 6649 0000 0032 7297 03</td>
                                    </tr>
                                    <tr>
                                        <td>BIC</td>
                                        <td>GENODE61OG1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                    </div>
                </div>
            </PageBox> 
        );
    }
}

export default Spenden;