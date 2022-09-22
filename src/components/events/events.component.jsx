import { useEffect, useState } from "react"
import EventsItems from "../events-items/event-items.component"

const Events = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('data'));
        if (items) {
            setItems(items);
        }
    }, [])

    return (
        <div>

            {
                items.length > 0 ? items.map((item) => <EventsItems key={item.eventName} item={item} /> ) : <h2>No Item Available</h2>
            }
        </div>
    )
}
export default Events