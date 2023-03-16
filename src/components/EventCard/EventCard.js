import React from 'react';
import styles from './EventCard.module.css';
import { Link } from 'react-router-dom';

function EventCard(props) {
    return (
        <div className={styles.event_card}>
            <img className={styles.event_img} alt="event_pic" src={props.data.image} />
            <h1>{props.data.title}</h1>
            <p>{props.data.oneliner}</p>
            <Link to={`/events/${props.data.title}`} className={styles.arrow}>
                <img alt="arrow"  src="/assets/Yellow_Arrow.svg" />
            </Link>
        </div>
    );
}

export default EventCard;
