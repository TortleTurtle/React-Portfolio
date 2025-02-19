import markerIcon from "../assets/marker.png"

export default function Entry({img, title, country, googleMapsLink, dates, text}) {

    return (
        <article className="entry">
            <img className="entry__img" src={img.src} alt={img.alt}/>
            <div className="entry__content">
                <div className="entry__header">
                    <img src={markerIcon} alt="Map marker icon"/>
                    <span>{country}</span>
                    <a href={googleMapsLink}>View on Google Maps</a>
                </div>
                <h2>{title}</h2>
                <p className="entry__travel-period">
                    {dates}
                </p>
                <p className="entry__description">
                    {text}
                </p>
            </div>
        </article>
    )
}