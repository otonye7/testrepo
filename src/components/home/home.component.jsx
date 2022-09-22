import BasicCard from "../card/card.component";
import CreateEvent from "../create-event/create-event.component";
import "./home.css";

const Home = () => {
    return (
        <div className="home-container">
            <BasicCard />
            <CreateEvent />
        </div>
    )
}
export default Home