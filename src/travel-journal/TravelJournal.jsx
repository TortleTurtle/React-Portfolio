import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import data from "./data.js"
import "./index.css";

function TravelJournal() {

    const entries = data.map((entry) => {
        return <Entry
            key={entry.id}
            {...entry}
        />
    })

    return (
        <>
            <Header/>
            <main>
                {entries}
            </main>
        </>
    )
}

export default TravelJournal