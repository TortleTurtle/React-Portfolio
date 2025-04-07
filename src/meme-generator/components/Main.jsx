import { useEffect, useState } from "react";
import styles from "../MemeGenerator.module.css";

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imgUrl: "http://i.imgflip.com/1bij.jpg",
    });
    const [memesArray, setMemesArray] = useState([]);

    function handleChange(e) {
        const { value, name } = e.currentTarget;

        setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
    }

    useEffect(() => {
        console.log("Effect Running");
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((json) => setMemesArray(json.data.memes));
    }, []);

    function changeMemeImage() {
        const newMeme = memesArray[Math.floor(Math.random() * memesArray.length)];

        setMeme((prevMeme) => ({ ...prevMeme, imgUrl: newMeme.url }));
    }

    return (
        <main className={styles.main}>
            <div className={styles.form}>
                <label>
                    Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button onClick={changeMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className={styles.meme}>
                <img src={meme.imgUrl} />
                <span className={styles.top}>{meme.topText}</span>
                <span className={styles.bottom}>{meme.bottomText}</span>
            </div>
        </main>
    );
}
