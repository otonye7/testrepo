import "./create-event.css";
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
    const history = useNavigate(); 

    const Create = () => {
        history('/create')
    }
  
    return (
        <div className="event-container">
        <div className="title-container">
            <div className="main-title">
                <h1 className="main-title-text">Imagine if <br /> Snapchat <br /> had events .</h1>
                <p className="paragraph-text">Easily host and share events with your friends <br /> across any social media </p>
            </div>
        </div>
        <div className="button-container">
                <button onClick={Create} className="button">Create my event</button>
        </div>
        </div>
    )
}
export default CreateEvent