import Birthcake from "../../assets/Birthdaycake.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import "./event-items.css";
const EventsItems = ({ item: { eventName, hostName, startDate, endDate, location, image } }) => {
    return (
        <div className="overall-container">
        <div className="items-container">
            <div className="event-name">
                 <h1 className="event">{eventName}</h1>
                 <span className="host">hosted by {hostName}</span> 
            </div>
            <br />
            <div className="date">
                    <div className="icon">
                        <CalendarMonthIcon />
                    </div>
                    <div className="timecontainer">
                      <h4 className="startTime">from {startDate}</h4>
                      <h4 className="endTime">to {endDate}</h4>
                    </div>
            </div>
            <br />
            <div className="location-name">
                <div className="icon">
                  <LocationOnIcon />
                </div>
                <div className="streetcontainer">
                    <h2 className="streetname">Street name <br /> <p className="loc-text">{location}</p> </h2>
                </div>
            </div>
        </div>
        <div className="image-event">
            <img src={Birthcake} alt={Birthcake} />
        </div>
        </div>
    )
}
export default EventsItems