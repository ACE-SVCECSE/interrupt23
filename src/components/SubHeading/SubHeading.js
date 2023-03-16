import React from "react";
import styles from "../Home/Home.module.css"

function SubHeading () {
    return<>
        <div className={styles.subHeading}>
            <h1 className={styles.heading}>INTERRUPT '23</h1>
            <p className={styles.oneliner }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, amet ad repellat molestiae nulla iste adipisci quis consequatur? Quidem enim exercitationem nulla distinctio corporis vitae architecto blanditiis saepe consectetur quasi.</p>
            <button>View More</button>
        </div>
    </>
}

export default SubHeading;