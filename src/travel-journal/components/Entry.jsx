import markerIcon from "../assets/marker.png"
import styles from "../TravelJournal.module.css"

export default function Entry({img, title, country, googleMapsLink, dates, text}) {

    return (
        <article className={styles.entry}>
            <img className={styles.entryImg} src={img.src} alt={img.alt}/>
            <div className={styles.entryContent}>
                <div className={styles.entryHeader}>
                    <img src={markerIcon} alt="Map marker icon"/>
                    <span>{country}</span>
                    <a href={googleMapsLink}>View on Google Maps</a>
                </div>
                <h2>{title}</h2>
                <p className={styles.entryTravelPeriod}>
                    {dates}
                </p>
                <p className={styles.entryDescription}>
                    {text}
                </p>
            </div>
        </article>
    )
}