import React, { Component } from 'react';
//import ReactPiwik from 'react-piwik';

import PageBox from '../components/PageBox.js'

class Downloads extends Component {

    componentDidMount(){
      //ReactPiwik.push(['trackPageView'])
    }

    render() {
        return (
            <PageBox title="Downloads" className="bg-3">
                <div className="row">
                    <div className="col-sm-12">
                        <ul>
                            <li><a href="download/satzung_v1.1.pdf">Satzung</a></li>
                            <li><a href="download/beitragsordnung_v1.2.pdf">Beitragsordnung</a></li>
                            <li><a href="download/beitrittserklaerung_v1.2.pdf">Beitrittserklärung</a></li>
                            <li><a href="download/beitrittserklaerung_interactive_v1.2.pdf">Beitrittserklärung (interaktives pdf)</a></li>
                        </ul>
                    </div>
                </div>
            </PageBox>
        );
    }
}

export default Downloads;