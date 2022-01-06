import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/de';

import ical from 'node-ical';
import PageBox from './PageBox';

const CALENDAR_ICAL_URL = "https://hub.vspace.one/remote.php/dav/public-calendars/f6MfGLnsGScRqd4Y?export";
const CALENDAR_URL = "https://hub.vspace.one/apps/calendar/p/f6MfGLnsGScRqd4Y";

// Only look at this much next occurences, to prevent infinite loop
const RECURRING_EVENT_LOOK_FORWARD = 5;

const DESIGNATOR_LINK = "Link"
const DESIGNATOR_DOWNLOAD = "Download"

class HomeEvents extends Component {
 
    constructor(props){
        super(props)

        this.state = {
            events: {}
        }        
    }

    componentDidMount() {
        // Repeat status fetch every second
        this.fetchEvents();
        this.interval = setInterval(() => {
            this.fetchEvents();
        }, /*30000*/30000);
    }

    componentWillUnmount() {
        // Remove interval for fetching state after unmount
        clearInterval(this.interval);
    }

    fetchEvents = async function(){
        const response = await fetch(CALENDAR_ICAL_URL);
        console.log("TEST!")
        const data = ical.sync.parseICS(await response.text());

        var eventAPI = {events:[]};

        console.log(data)

        for (let k in data) {
            if (data.hasOwnProperty(k)) {
                var ev = data[k];
                if (data[k].type === 'VEVENT') {
                    
                    var isRecurringEvent = (ev.rrule !== undefined);
                    // Discard old events except recurring
                    if (ev.end < Date.now() && !isRecurringEvent){
                        continue;
                    }

                    var isCancelled = false;
                    // Check if event is cancelled
                    if (ev.status !== undefined && ev.status === "CANCELLED"){
                        isCancelled = true;
                    }

                    var summary = ev.summary, start = ev.start, end = ev.end, location = ev.location, description = ev.description;

                    // Only for recurring events
                    // Check if event is cancelled in reccurences
                    var isOutOfScope = false;
                    if (isRecurringEvent) {
                        var lastDate;
                        for (var i = 0; i < RECURRING_EVENT_LOOK_FORWARD; i++) {
                            if (i === (RECURRING_EVENT_LOOK_FORWARD - 1)){
                                isOutOfScope = true;
                            }
                            // get date of next recurrence
                            var next = ev.rrule.after(lastDate ? lastDate : Date.now(),true);
                            if (!next){
                                continue;
                            }
                            // get duration for calculating end of recurring date
                            var duration = end.getTime() - start.getTime();

                            // calculate new dates for recurrence
                            start = next;
                            end = new Date(next.getTime() + duration);

                            var lookupKey = next.toISOString().substring(0,10);
                            var recurrenceOverride = ev.recurrences === undefined ? undefined : ev.recurrences[lookupKey];
                            var exception = ev.exdate === undefined ? undefined : ev.exdate[lookupKey];
                            
                            // If there is an exception for this recurrence or it is cancelled this should not be displayed
                            // rather continue to search for further reccurences
                            if (exception !== undefined 
                                || (recurrenceOverride 
                                    && recurrenceOverride.status 
                                    && recurrenceOverride.status === "CANCELLED")){
                                lastDate = end;
                                continue;
                            }

                            // check for and apply overrides
                            if (recurrenceOverride !== undefined){
                                summary = recurrenceOverride.summary;
                                start = recurrenceOverride.start;
                                end = recurrenceOverride.end;
                                location = recurrenceOverride.location;
                            }

                            // Stop checking further recurrences because at this point the next one is found
                            break;
                        }
                    }

                    // Do not show cancelled events
                    if (isCancelled || isOutOfScope){
                        continue;
                    }

                    var rawDescription = "";
                    var download = "";
                    var link = "";
                    if (description !== undefined){
                        var descriptionLines = description.split("\n");                            

                        // Get lines starting with specific designators (<DESIGNATOR>: <Value>) and move separate them out from the description itself
                        for (var i in descriptionLines){
                            var line = descriptionLines[i];
                            var designator = line.substring(0, line.search(":"));

                            switch(designator){
                                case DESIGNATOR_DOWNLOAD:
                                    download = line.substring(DESIGNATOR_DOWNLOAD.length + 1, line.length).trim();
                                    break;
                                case DESIGNATOR_LINK:
                                    link = line.substring(DESIGNATOR_LINK.length + 1, line.length).trim();
                                    break;
                                default:
                                    rawDescription += line + " ";
                            }
                        }
                        rawDescription = rawDescription.trim();
                    }

                    // Build object corresponding to the previously used event-api
                    eventAPI.events.push({
                        title: summary,
                        start: start,
                        end: end,
                        loc1: location,
                        loc2:"",
                        loc3:"",
                        price:0.0,
                        desc:`<p>${rawDescription}</p>`,
                        link: link,
                        download: download,
                        isRecurring: isRecurringEvent
                    });
                }
            }
        }

        // Sort by starting date
        eventAPI.events.sort((a, b) => {
            if (a.start < b.start){
                return -1;
            } else if (b.start < a.start) {
                return 1;
            }
            return 0;
        })

        this.setState({events: eventAPI})
    }

    render() {

        var events = ( <div></div> )
        
        if (this.state.events.events){
            events = this.state.events.events.map((val,index) => (           
                <HomeEvent key={index} event={val} />
            ));
        } 
        
        if (!this.state.events.events || this.state.events.events.length == 0){
            events = (
                <div>
                    <p>In nächster Zeit keine Events geplant.</p>
                </div>
            )
        }

        return (
            <PageBox id="Events" title="Events" className="bg-2">
                <h3 className="margin"><a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">Ganzer Kalender</a></h3>
                <div id="events">
                    { events }
                </div>
            </PageBox>
        );
    }
}

class HomeEvent extends Component {

    constructor(props){
        super(props)

        this.iconStyle = ({
            color: "#777777",
            marginRight: "8px"
        })
    }

    render(){

        var event = this.props.event

        var date = (<div></div>)

        if (event.start && event.end){
            date = (
                <span className="event_time">
                    <Moment 
                        locale="de"
                        date={new Date(event.start)}
                        format=" HH:mm"
                    /> bis
                    <Moment 
                        locale="de"
                        date={new Date(event.end)}
                        format=" HH:mm"
                    /> Uhr
                </span>
            )
        } else if (!event.end){
            date = ( 
                <span className="event_time">
                    ab <Moment 
                        locale="de"
                        date={new Date(event.start)}
                        format=" HH:mm"
                    /> Uhr
                </span> 
            )
        }

        return (
            <div className="event">
                <div className="row">
                    <div className="offset-xs-1 col-xs-10 offset-md-2 col-md-2 no-side-padding" >
                        <div className="event_date align-middle">
                            {event.isRecurring ?
                                (
                                    <span className="event_icons">
                                        <span className="glyphicon-repeat glyphicon"></span>
                                    </span>
                                ): ""
                            }
                            <div className="event_day text-center">
                                <Moment 
                                    locale="de"
                                    date={new Date(event.start)}
                                    format="DD"
                                />
                            </div>
                            <div className="event_month text-center">
                                <Moment 
                                    locale="de"
                                    date={new Date(event.start)}
                                    format="MMMM"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="offset-xs-1 col-xs-10 offset-md-0 col-md-6 no-side-padding" >
                        <div className="event_details">
                            <span className="event_titleline">
                                <span className="event_title">{event.title}</span>
                                <br></br>
                                {date}
                                <span className="event_icons">
                                    {event.link?
                                        (
                                            <a 
                                                href={event.link} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span style={this.iconStyle} className="glyphicon-link glyphicon"></span>
                                            </a>
                                        ):""
                                    }

                                    {event.download?
                                        (
                                            <a 
                                                href={event.download} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span style={this.iconStyle} className="glyphicon-file glyphicon"></span>
                                            </a>
                                        ):""
                                    }

                                    <span className="glyphicon-calendar glyphicon"></span>
                                </span>
                            </span>
                            <span className="event_desc">
                                <p dangerouslySetInnerHTML={{__html:event.desc}}></p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default HomeEvents;