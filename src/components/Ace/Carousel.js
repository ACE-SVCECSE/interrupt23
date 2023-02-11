import {useState} from 'react';
import arrowleft from './images/arrowleftactually.png';
import arrowright from './images/arrowright.png';

const images = [
    {
        "caption": "AcE inaugaration",
        "url": "https://hips.hearstapps.com/hmg-prod/images/cute-baby-animals-1558535060.jpg"
    },
    {
        "caption": "Hackerrupt",
        "url": "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=pexels-pixabay-247502.jpg"
    }
]

const Carousel = () => {
    const [n, setN] = useState(0);
    const inc = () => {
        if (n != images.length - 1){
            setN(n + 1); 
        }
    }
    const dec = () => {
        if (n != 0){
            setN(n - 1); 
        }
    }
    return(
        <>
        <div style = {{display: "flex", flexDirection: "column", gap: "20px", justifyContent: "space-between"}}>
            <div>
                <h1 style = {{textAlign: "center"}}>Gallery</h1>
            </div>
            <div>
                <div style = {{display: "flex", flexDirection: "row", justifyContent: "center", gap: "100px"}}>
                <button onClick = {dec} className = 'arrow' style = {{backgroundColor: "#181a19"}}><div style = {{background: "#181a19"}}><img src = {arrowleft} length = "50px" height = "50px"/></div></button>
                    <div style = {{display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px"}}>
                        <img src = {images[n].url} length = "20px" height= "200px"/>
                        <h6 className = "typewriter2" style = {{alignSelf: "center"}}>{images[n].caption}</h6>
                    </div>
                <button onClick = {inc} className = 'arrow' style = {{backgroundColor: "#181a19"}}><div style = {{background: "#181a19"}}><img src = {arrowright} length = "50px" height = "50px"/></div></button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Carousel;