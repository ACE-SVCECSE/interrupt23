import React from "react";
import styles from "../Home/Home.module.css"

function SubHeading () {
    return<>
        <div className={styles.subHeading}>
            <h1 className={styles.heading}>INTERRUPT '23</h1>
            <p className={styles.oneliner }>The Department of Computer Science and Engineering, SVCE, and ACE jointly present Interrupt, a national-level technical symposium where talents meet the limelight they deserve to acknowledge and showcase their finest selves.
            It offers a wide range of activities, such as workshops, coding contests, ideathons, web development competitions, and many more.</p>
            <button>View More</button>
        </div>
    </>
}

export default SubHeading;