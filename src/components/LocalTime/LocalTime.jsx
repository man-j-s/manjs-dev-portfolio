import "./LocalTime.css";
import { useEffect, useState } from "react";

function LocalTime(){
    const [now, setNow] = useState(new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return() => clearInterval(id);
    }, []);
        const timeText = now.toLocaleTimeString("en-CA", {timeZone: "America/Toronto", hour: "numeric", minute:"2-digit", second:"2-digit"});
        const dateText = now.toLocaleDateString("en-CA", {timeZone: "America/Toronto", weekday: "long", month: "long", day: "numeric", year: "numeric"});
    return(
        <p>
        <time className="localtime" dateTime={now.toISOString()}>Local Date and Time {dateText} {timeText}</time>
        </p>
    )
}

export default LocalTime;