import React from 'react';
import Title from '../Title/Title';
import styles from './Guidelines.module.css';

function Guidelines() {
	return (
		<div className={styles.pagewrapper}>
			<div className={styles.ruleswrapper}>
				<Title heading="GUIDELINES" component="Guidelines"></Title>
				<div className={styles.subheading}>
					Dear participants, here are some very important rules and regulations that you need to follow for Interrupt'23
				</div>
				<div className={styles.rules}>
					<ol>
						<li>All participants must carry your college ID card and must wear the ID card given by us for the entire duration of the symposium.</li>
						<li>Usage of mobile phones is restricted inside the campus.</li>
						<li>Avoid taking photos/selfie inside the campus.</li>
					</ol>
					<h3>Participants are expected to follow the dress code as follows:</h3>
					<ol>
						<li>For girls, Salwar Kameez with Duppatta, Jeans with Kurtis and stole is advisable.</li>
						<li>For boys, Torn, faded jeans, T-Shirts will NOT be allowed.</li>
					</ol>
					<h3>General information:</h3>
					<ol>
						<li>Registration for the participants begins at 8:30 am.</li>
						<li>All participants are requested to register online and produce your college ID card and confirm your participation at the registration desk. Registration will close by 9.30am.</li>
						<li>All the preliminary rounds will be starting at 9:30 am.</li>
						<li>Participants can avail the college transport during the day of symposium.</li>
						<li>Lunch and refreshments can be availed in the college canteen on payment.</li>
						<li>Judges decision will be final for the events.</li>
						<li>Don’t involve in indisciplinary actions in the college premises.</li>
						<li>Overcrowding or loitering should be strictly avoided in the college premises.</li>
						<li>Participation in events will be disqualified if the general and event rules are not followed by the participants</li>
					</ol>

				</div>
				<div className={styles.endnote}>
				Also teams violating our rules and indulging in other unprofessional activities will be disqualified on the spot without any question.<br></br>
				</div>
				<div className={styles.regards}>
					With regards,<br></br>&ensp;ACE team
				</div>
			</div>
		</div>
	)

}

export default Guidelines;
