import React from "react";
import {Link} from 'react-router-dom';
import styles from "../Home/Home.module.css"

function SubHeading () {
    return<>
        <div className={styles.subHeading}>
            <h1 className={styles.heading} style={{fontFamily:"Playfair Display, serif"}}>INTERRUPT '23</h1>
            <p className={styles.oneliner }>We, Association of Computer Engineers, Department of Computer Science and Engineering, SVCE, present Interrupt'23, a national-level technical symposium where talents meet the limelight they deserve to acknowledge and showcase their finest selves. It offers a wide range of activities, such as workshops, coding contests, ideathons, web development competitions, and many more.</p>
            <button> <Link to="/events">View Events</Link></button>
        </div>
    </>
}

export default SubHeading;