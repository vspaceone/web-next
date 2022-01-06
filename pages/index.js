import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

import { useSpaceApiContext } from '../contexts/spaceapi-state'

const HomePosition = dynamic(() => import('../components/HomePosition').then((mod) => mod.default), { ssr: false });

import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { Timeline } from 'react-twitter-widgets'

import PageBox from '../components/PageBox.js';
import HomeJumbo from '../components/HomeJumbo.js';
import HomeEvents from '../components/HomeEvents.js';

export default class Home extends Component {

    componentDidMount() {
        //ReactPiwik.push(['trackPageView'])
    }

    render() {

        return (
            <div>
                <HomeJumbo />
                <PageBox title="Was wir machen" className="bg-3">
                    <p>
                    Unser Ziel ist der Wissensaustausch sowie die Bildung aller interessierten
                    in den Bereichen neuartiger computergestützter Technologien (wie zum Beispiel aber nicht ausschließlich
                    3D-­Druck, CNC, Internet der Dinge und Robotik), der Elektrotechnik und Elektronik
                    sowie auch auf Gebieten der Reparatur und Wartung.
                    <br></br><br></br>
                    Natürlich aber auch ganz im Sinne aller anderen Hacker- und Makerspaces das bieten einer Plattform,
                    um seinen Interessen in diesen Gebieten nachzugehen von Programmieren bis Holz- und Metallwerken ist fast alles dabei.
                    <br></br><br></br>
                    Dazu haben wir eine immer größer werdende offene Werkstatt, die für jeden zugänglich sein soll!
                    </p>
                    <br /><br />
                    <p className="text-center"><Link href="/faq">Mehr Fragen zu uns und was wir machen beantworten wir hier!</Link></p>
                </PageBox>
                <HomeInfoBoxBanner />
                <PageBox id="Mitmachen" title="Mitmachen" className="bg-3">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Vorbeischauen</h3>
                            <p>Du möchtest uns und unsere Räumlichkeiten gerne persönlich kennenlernen? Schau doch Dienstags ab 19:00 bei uns in der Wilhelm-Binderstraße 19 in Villingen vorbei. Dienstags findet bei uns jede Woche der Chaostreff statt.</p>
                        </div>
                        <div className="col-sm-6">
                            <h3>Mitglied werden</h3>
                            <p>Bei uns kann Jeder und Jede mitmachen. Interessierte Schüler, Studenten und Erwachsene, die sich für kreativen Umgang mit Technik begeistern sind willkommen. Wenn euch gefällt was wir tun und ihr uns unterstützen wollt findet ihr unser Beitrittsformular <a href="/mitgliedwerden">hier</a>.</p>
                        </div>
                        <div className="col-sm-6">
                            <h3>Telegram</h3>
                            <p>Für die inoffizielle Kommunikation verwenden wir eine <a href="https://t.me/joinchat/DmNdswpnKgox_zzqENYXiA">Telegramgruppe</a>. Telegram ist eine Nachrichtenapp, ähnlich WhatsApp. Wenn du dich interessierst und wissen willst, was bei uns los ist, trete ihr bei oder schreibe uns eine Email an info[at]vspace.one.</p>
                        </div>
                        <div className="col-sm-6">
                            <h3>Mailingliste</h3>
                            <p>Die &apos;offizielle&apos; Kommunikation, wie Einladungen zu Veranstaltungen, läuft über unsere <a href="https://lists.vspace.one/postorius/lists/public.lists.vspace.one/">Mailingliste</a>. Trag dich ein und bleib up-to-date. Das ist die Wahl, falls du nur auf dem Laufenden bleiben willst. (ca. 1 Mail pro Monat)</p>
                        </div>
                        <div className="col-sm-6">
                            <h3>Spenden</h3>
                            <p>Dir gefällt was wir machen, hast aber keine Möglichkeit oder Lust Mitglied zu werden? Gerne nehmen wir wie <a href="/mitgliedwerden">hier beschrieben</a> deine Spende als Überweisung an.</p>
                        </div>
                    </div>
                </PageBox>
                <PageBox title="Aktuelles" className="bg-2">
                    <div className="row">
                            <div className="col-sm-8 offset-sm-2">
                        <Timeline
                            dataSource={{
                                sourceType: 'profile',
                                screenName: 'vspaceone'
                            }}
                            options={{
                                height: '80vh'
                            }}
                            renderError={(_err) => <p>Twitter-Widget konnte nicht geladen werden.<br></br>Bitte überprüfe Deine Ad- oder Skriptblocker.</p>}
                        />
                        </div>
                    </div>
                </PageBox>
                <HomeEvents />
                <HomeState />
                <HomePosition />
            </div>

        );
    }
}

class HomeInfoBoxBanner extends Component {

    constructor(props) {
        super(props);
        this.state = { value: 0 }
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.setState({ value });
    }

    render() {
        
        const slideContent = [
            {
                title: "Ausstattung",
                text: "Wir haben zwei moderne Räume. In der Brücke stehen bequeme Sofas, ein Beamer und ein Kühlschrank. Im Maschinenraum, kann an Projekten gearbeitet werden.",
                imageSrc: "/pic/vspaceone_maschinenraum.jpg"
            },
            {
                title: "3D Druck",
                text: "Unser neuer Prusa i3 MK3s liefert dank zahlreicher Voreinstellungen und ausgeklügelter Features selbst nach kurzen Einweisungen in schnellster Zeit zu Ergebnissen die sich sehen lassen können.",
                imageSrc: "/pic/vspaceone_prusa_mk3s_small.jpg"
            },
            {
                title: "Elektronik",
                text: "Der Elektronikarbeitsplatz lädt zum Hacken ein. Stets zur Hand sind Lötkolben, Heißluftstation, Multimeter, Labornetzteile, digitales Oszilloskop sowie ein Haufen Zubehör und natürlich Kabel.",
                imageSrc: "/pic/vspaceone_big_psu_small.jpg"
            },
            {
                title: "Reparatur",
                text: "Eine Wand voll mit sortierten Elektronikkomponenten bietet die Qual der Wahl von üblicherweise benötigen Bauteile wie Widerstände oder Kondensatoren.",
                imageSrc: "/pic/vspaceone_cap_drawers_small.jpg"
            },
            {
                title: "Holz und Metall",
                text: "Unsere noch nicht allzu große, aber ständig wachsende, Ausstattung an Werkzeug und Maschinen steht jederzeit für große und kleine Projekte in unseren Räumen bereit.",
                imageSrc: "/pic/vspaceone_holzundmetall.jpg"
            }
        ]

        const topContainerStyle = {
            marginTop: "0px",
            paddingTop: "40px",
            maxHeight: "100vh",
            minHeight: "70vh",
            zIndex: "-4",
            overflow: "hidden"
        }

        return (
            <div className="container-fluid no-side-padding bg-2 text-center" style={topContainerStyle} id="Ausstattung">
                <div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={100}
                        totalSlides={slideContent.length}
                        interval={10000}
                        isPlaying={true}
                        infinite={true}
                    >
                        <DotGroup />
                        <Slider>
                            <>
                                {slideContent.map((content, idx) => (
                                    <Slide key={idx} index={idx}>
                                        <HomeInfoBoxBannerSlide
                                            title={content.title}
                                            text={content.text}
                                            imageSrc={content.imageSrc}
                                        />
                                    </Slide>
                                ))}
                            </>
                        </Slider>
                    </CarouselProvider>
                </div>
            </div>
        );
    }

}

function HomeInfoBoxBannerSlide(props) {

    const rowTextClasses = "col-xs-10 offset-xs-1 col-sm-8 offset-sm-2"
//<div style={ zIndex: "1", overflow: "hidden", backgroundSize: "cover", objectFit: "contain", backgroundPosition: "center", backgroundImage: `url(${props.imageSrc})`, height: "100%", maxHeight: "100vh" }}></div>
    return (
        <>
            <div className="row">
                <div className={rowTextClasses}>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </div>

            <Image style={{ overflow: "hidden" }} layout="responsive" src={props.imageSrc}></Image>
        </>
    )
}

const HomeState = () => {
    const spaceApi = useSpaceApiContext()

    var classes = "container-fluid text-center "
    var text = ""

    if (spaceApi.state && spaceApi.state.open) {
        classes += " bg-success"
        text = "Offen"
    } else if (spaceApi.state && !spaceApi.state.open) {
        classes += " bg-danger"
        text = "Geschlossen"
    } else {
        classes += " bg-warning"
        text = "Defekt"
    }

    return (
        <PageBox className={classes}>
            <h2 style={{color: "#ffffff"}} >Raumstatus</h2>
            <br />
            <h3 id="stateText" style={{color: "#ffffff"}}>{text}</h3>
        </PageBox>
    );
}