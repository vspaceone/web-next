import React, { Component } from 'react';

import PageBox from '../components/PageBox.js'

//import ReactPiwik from 'react-piwik';

//import Particles from 'react-particles-js';

class FAQ extends Component {

  componentDidMount() {
    //ReactPiwik.push(['trackPageView'])
  }

  render() {
    return (
      <div>
        <div
          className="container-fluid bg-1 text-center"
          style={{
            position: 'relative',
            padding: 0,
            backgroundColor: '#08A059',
            height: "200px"
          }}
        >
          <Particles height="200px" params={particleConfig} />
          <div
            id="particles-overlay"
            style={{
              height: '200px',
              marginTop: '30px',
              zIndex: 10,
              position: 'absolute',
              width: '100%',
              top: 0
            }}
          >
            <h1 className="margin">Fragen und Antworten</h1>
          </div>
        </div>

        <PageBox title="Was ist der vspace.one e.V.?" className="bg-2">
          <p>Wir sind ein gemeinnütziger Hacker- und Makerspace!</p>
        </PageBox>

        <PageBox title="Was ist ein Hackerspace? Und wo wir gleich dabei sind... Was ist ein Makerspace?" className="bg-3">
          <p>
            Hacker- und Makerspaces sind primär Orte für Wissensaustausch und Bildung in verschiedenen Bereichen
            der Wissenschaft und unterschiedlicher Technologien.
            <br />
            Hackerspaces konzentrieren sich dabei eher auf informationstechnische Wissensgebiete wie bspw. Programmierung,
            während sich Makerspaces eher auf mechanische bzw. handwerkliche Gebiete konzentrieren wie unter anderem 3D-Druck und Holzbearbeitung.
          </p>
        </PageBox>

        <PageBox title="Was ist ein Hacker? Sollte ich Angst haben?" className="bg-2">
          <p>
            Der Begriff &quot;Hacker&quot; bezeichnet für uns primär nicht das, was im Allgemeinen umgangssprachlich
            darunter verstanden wird.
            <br /><br />
            Die kurze und oberflächliche Antwort: Ein Hacker ist ein Tüftler.
            <br /><br />
            Die etwas längere Antwort gibt eine Aussage von <a href="https://de.wikipedia.org/wiki/Wau_Holland">Wau Holland</a>: <br></br>
            „Ein Hacker ist jemand, der versucht einen Weg zu finden, wie man mit einer Kaffeemaschine Toast zubereiten kann“.
            Ein Hacker löst also nicht unbedingt nur Probleme, er versucht auch zu experimentieren und das Machbare zu erkunden
            wo er nur kann!
            <br /><br />
            Eine sehr ausführliche Antwort und weiterführende links bietet der <a href="https://de.wikipedia.org/wiki/Hacker">Wikipedia Artikel zum Begriff &quot;Hacker&quot;</a>
          </p>
        </PageBox>

        <PageBox title="Was macht ihr nun?" className="bg-3">
          <p>
            Unser Ziel ist der Wissensaustausch sowie die Bildung aller interessierten
            in den Bereichen neuartiger computergestützter Technologien (wie zum Beispiel aber nicht ausschließlich
            3D-­Druck, CNC, Internet der Dinge und Robotik), der Elektrotechnik und Elektronik
            sowie auf dem Gebiet der Reparatur und Wartung.
            Natürlich aber auch ganz im Sinne aller anderen Hacker- und Makerspaces das bieten einer Plattform,
            um seinen Interessen in diesen Gebieten nachzugehen.
          </p>
        </PageBox>
        
        <PageBox title="Was macht ihr nun?" className="bg-2">
          <p>Die Antwort auf diese Frage sollte <a href="https://vspace.one/#Ort">hier auf der Website immer aktuell sein.</a></p>
        </PageBox>

        <PageBox title="Wo darf ich parken?" className="bg-3">
          <p>Für Fahrräder steht am mittleren Eingang ein Fahrradständer bereit. Autos von Mitgliedern und Besuchern dürfen werktags ab 16 Uhr sowie am Wochenende und feiertags ganztags im Innenhof geparkt werden.</p>
        </PageBox>

        <PageBox title="Wann treffe ich euch an?" className="bg-2">
          <p>
            Überwiegend treffen wir uns jeden Dienstagabend ab etwa 19.00 Uhr. Die meisten Mitglieder haben ihren eigenen Schlüssel und können somit rein, wann immer sie wollen.
            Ob gerade jemand da ist erfährst du direkt auf vspace.one.
            Durch die SpaceAPI gibt es zudem auch fertige Apps, um sich den Raumstatus anzeigen zu lassen. Wer die Daten lieber selbst verarbeiten möchte,
                        findet sie hier: <a href="https://vspace.one/spaceapi.json">https://vspace.one/spaceapi.json</a>
          </p>
        </PageBox>

        <PageBox title="Wie Kontaktiere ich euch/eure Community?" className="bg-3">
          <p>
            Es gibt eine öffentliche Mailingliste: <a mailto="public@lists.vspace.one">public@lists.vspace.one</a>
                        Dieser Liste könnt ihr natürlich bei Interesse an aktuellen Informationen <a href="https://lists.vspace.one/postorius/lists/public.lists.vspace.one/">hier beitreten!</a>
            <br />
                        Unserer Telegram Gruppe könnt ihr <a href="https://t.me/joinchat/DmNdswpnKgox_zzqENYXiA">hier beitreten!</a>
          </p>
        </PageBox>

        <PageBox title="Was sollte ich können bevor ich zu euch komme?" className="bg-2">
          <p>
            Sobald du unsere Räume betrittst hast du alle Voraussetzungen automatisch erfüllt. Glückwunsch!
            <br /><br />
            Wir erheben keine Ansprüche auf irgendwelche Voraussetzungen die jemand erfüllen sollte und
            grundsätzlich ist bei uns jeder willkommen.
            Interesse und Neugierde sind aber auf keinen Fall von Nachteil!
          </p>
        </PageBox>

        <PageBox title="Was sollte ich mitbringen, wenn ich zu euch komme?" className="bg-3">
          <p>
            Wenn du nachts kommst, idealerweise ein Mobiltelefon und unsere Nummer, um im Space anzurufen, damit wir dir die Tür öffnen.
            Wir arbeiten aktuell daran, dass eingehende Anrufe auf jeden Fall bemerkt werden!
            <br /><br />
            Ansonsten wäre Zeit und Interesse praktisch. Ein Notebook dabei zu haben ist üblicherweise auch gut.
            Getränke gibt es bei uns für je 1€, du darfst aber auch eigene mitbringen.
          </p>
        </PageBox>

        <PageBox title="Muss ich Mitglied werden um regelmäßig vorbeikommen zu dürfen?" className="bg-2">
          <p>
            Nein. Ihr seid eingeladen jederzeit vorbeizukommen - wenn wir offen haben und so oft ihr wollt.
            <br /><br />
            Als Mitglied unterstützt ihr uns aber finanziell und genießt einige Vorteile.
            Eines davon ist z.B. ein Schlüssel zu unseren Räumlichkeiten um jederzeit freien Eintritt zu haben!
          </p>
        </PageBox>
      </div>
    );
  }
}

export default FAQ;

var particleConfig = {
  "particles": {
    "number": {
      "value": 50,

    },
    "color": {
      "value": "#0ac26c"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#0ac26c"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 30,
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
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

class Particles extends Component {
  render() {
    return (
      <span>No Particles</span>
    )
  }
}