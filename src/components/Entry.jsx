export default function Entry(props) {
    return (
        <article className="entry">
            <img className="entry__img" src={props.img} alt={props.title}/>
            <div className="entry__content">
                <div className="entry__header">
                    <img src="/public/marker.png" alt="Map marker icon"/>
                    <span>{props.country}</span>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className="entry__travel-period">
                    {props.travelPeriodFrom} - {props.travelPeriodTo}
                </p>
                <p className="entry__description">
                    {props.description}
                </p>
            </div>
        </article>
    )
}