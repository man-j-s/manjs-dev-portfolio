import "./LocationMap.css";

function LocationMap() {
    return (
        <div>
            <iframe title="Located in Toronto, ON, CA" className="location-map" src="https://www.openstreetmap.org/export/embed?bbox=-80.34696308853052%2C43.218295862297744%2C-78.58091084243677%2C43.93361308243736&amp;layer=mapnik" loading="lazy"></iframe><br/>
            <small><a className="zoom-map" href="https://www.openstreetmap.org/#map=10/43.5770/-79.4639">View Larger Map</a></small>
        </div>
    )
}

export default LocationMap;