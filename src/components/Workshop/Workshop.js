import React from 'react';
import styles from './Workshop.module.css';
import getEvents from '../../data/eventsData';

function Workshop() {
		const event = getEvents().find((event) => event.title === "Workshop");

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
				<div className={styles.rulesTxt}>{event.desc}</div>
				<div>
					<ul>
						{event.rules.map(description => <li className={styles.rulesTxt}>{description}</li>)}				 
					</ul>					
				</div>
				<ol>
					<h1 className={styles.subHeading}>Organizers:</h1>
					{Object.keys(event.eventDetails.organizers).map(current => <li  className={styles.rulesTxt}>{current} <br></br> {event.eventDetails.organizers[current]}</li>)}
				</ol>			
				<a href={event.eventDetails.registerLink} target="_blank" rel="noopener noreferrer" className={styles.registerBtn}>REGISTER</a>
				<div>
					<h2 className={styles.subHeading}>For any queries, contact</h2>
					<ol>
						{Object.keys(event.eventDetails.contact).map(current => <li className={styles.contact}>{current} : {event.eventDetails.contact[current]}</li>)}
					</ol>
				</div>
				
			</div>
			<div className={styles.imgDiv}>
				 {event.images.map(image => <img src={image} alt="fake-img" className={styles.fakeImg} />)}
			</div> 

			</div>
		  </div>
		);
}

export default Workshop;
