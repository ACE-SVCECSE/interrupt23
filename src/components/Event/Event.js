import React from 'react';
import styles from './Event.module.css';
import {useParams} from "react-router-dom";
import getEvents from '../../data/eventsData';

function Event(props) {
		const params = useParams();
		const event = getEvents().find((event) => event.title === params.eventname);

		return (
		  <div>
			{/* Google Fonts */}
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
			<link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display:wght@600&display=swap" rel="stylesheet" />
			{/******/}
			{/* Main Content */}
			<div className={styles.flexContainer}>
			  <div className={styles.textContainer}>
				<h1 className={styles.heading}>{event.title}</h1>
				<p className={styles.discText}>{event.eventDetails.desc}</p>
				<h2 className={styles.subHeading}><strong>Rules:</strong></h2>
				<ol>
					{event.eventDetails.rules.map(rule => <li className={styles.rulesTxt}>{rule}</li>)}				 
				</ol>
				<p className={styles.deadlineText}><span className="bold-txt">Deadline to Register:</span> 5th May 2021, 11:59 p.m.</p>
				<a href={event.eventDetails.registerLink} target="_blank" rel="noopener noreferrer" className={styles.registerBtn}>REGISTER</a>
			  </div>
			  <div className={styles.imgDiv}>
				<img src={event.image} alt="fake-img" className={styles.fakeImg} />
			  </div> 
			</div>
		  </div>
		);
}

export default Event;
