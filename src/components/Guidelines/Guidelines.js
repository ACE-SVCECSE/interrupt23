import React from 'react';
import Title from '../Title/Title';
import styles from './Guidelines.module.css';

function Guidelines() {
	return (
		<div className={styles.pagewrapper}>
			<div className={styles.ruleswrapper}>
				<Title heading="Rules" desc="Lorem ipsum dolor"></Title>
				<div className={styles.subheading}>
					Dear participants, here are some very important rules and regulations that you need to follow for Hackerrupt'22
				</div>
				<div className={styles.rules}>
					1. Your college id card is mandatory for the event. You will not be permitted in without your ID card.<br></br>
					2. Covid vaccination certificate is mandatory for the final round.<br></br>
					3. WiFi will be provided but you can also bring your own dongle or use your own internet.<br></br>
					4. Participants are requested to bring their own laptops, chargers, pen drives, hardware components and other accessories.<br></br>
					&emsp;We advise you to take care of them and the ACE team will not be responsible for your personal belongings.<br></br>
					5. Participants are requested to pre-install all their required softwares as heavy downloading of large files might not be possible.<br></br>
                    6. You can also bring blankets or pillows in case it gets cold or you need to take a nap.<br></br>
					7 .Also please note the dress code for the hackathon<br></br>
					&emsp;&emsp;&emsp;&#10153; Boys: Shorts are not allowed<br></br>
					&emsp;&emsp;&emsp;&#10153; Girls: Sleeveless clothings are not allowed<br></br>
					&emsp;&emsp;&emsp;&#10153; Please ensure that you follow the dress code and avoid inappropriate dressing.<br></br>
					8. All teams are requested to start their projects strictly at the venue and during the hackathon.
				</div>
				<div className={styles.endnote}>
				Also teams violating our rules and indulging in other unprofessional activities will be disqualified on the spot without any question.<br></br>
				We hope you have a safe journey, looking forward to meeting you at Hackerrupt'22 on 8th and 9th October!
				</div>
				<div className={styles.regards}>
					With regards,<br></br>&ensp;ACE team
				</div>
			</div>
		</div>
	)

}

export default Guidelines;
