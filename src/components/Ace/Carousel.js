import { useState } from 'react';
import styles from './Ace.module.css';


const images = [
    {
        "caption": "ACE Inaugaration",
        "url": "/assets/ace_inaugration.jpeg"
    },
    {
        "caption": "Hackerrupt",
        "url": "/assets/hackerrupt_22.JPG"
    },
    {
        "caption": "Womania",
        "url": "/assets/womania.jpeg"
    },
    {
        "caption": "Code bingo",
        "url": "/assets/codebingo.jpeg"
    },
    {
        "caption": "Ace your potential",
        "url": "/assets/ace_inaugration.jpeg"
    }

]

const Carousel = () => {
    const [n, setN] = useState(0);
    const inc = () => {
        if (n !== images.length - 1){
            setN(n + 1); 
        }
    }
    const dec = () => {
        if (n !== 0){
            setN(n - 1); 
        }
    }
    return(
        <>
        <div className ={styles.carousel}>
            <div>
                <h1 style = {{textAlign: "center"}}>Gallery</h1>
            </div>
            <div>
                <div style = {{display: "flex", flexDirection: "row", justifyContent: "center", gap: "100px"}}>
                        <button onClick={dec} className={styles.arrow} style={{ backgroundColor: "#181a19" }}><div style={{ background: "#181a19" }}><img src="/assets/arrowleftactually.png" alt="arrowleft" length = "50px" height = "50px"/></div></button>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px" }}>
                            <img src={images[n].url} alt="carousel" length="20px" height="200px" className={styles.carousel_image} />
                            <h3 className={styles.typewriter2} style = {{alignSelf: "center"}}>{images[n].caption}</h3>
                    </div>
                        <button onClick={inc} className={styles.arrow} style={{ backgroundColor: "#181a19" }}><div style={{ background: "#181a19" }}><img src="/assets/arrowright.png" alt ="arrow" length = "50px" height = "50px"/></div></button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Carousel;
