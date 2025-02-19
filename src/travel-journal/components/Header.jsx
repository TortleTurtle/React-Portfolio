import globeIcon from "../assets/globe.png"

export default function Header() {
    return (
        <header>
            <nav>
                <img src={globeIcon} alt="Globe icon" aria-hidden="true"/>
                <span>My travel journal.</span>
            </nav>
        </header>
    )
}