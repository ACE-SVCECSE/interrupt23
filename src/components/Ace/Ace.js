import React from 'react';
import styles from './Ace.module.css';
import AceCard from './AceCard';
import Carousel from './Carousel';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import getTeam from '../../data/teamData';

const Ace = () => {
	const team = getTeam();

	useEffect(() => {
        AOS.init();
      }, []);

	return(
			<div style={{ position: "relative", top: "50px" }} className={styles.ace }>
				<div className = {styles.everything}>
					<div>
						<div className={styles.photoplusace }>
								<img src = "/assets/whatisace.gif" className = {styles.whatisaceimage} alt="whatisace" height = "20%" width = "60%" style = {{position: "relative", left: "260px"}}/>
								<div className={styles.blurbox}>
									<h1 className = {styles.whatisace}>What is ACE?</h1>
									<div className = {styles.acepic}><img src = "https://i.ibb.co/WHmm2qh/logo-1.png" height = "100px" width = "100px" alt = "aceImg" /></div>
									<p className = {styles.acepara}>The Association of Computer Engineers (ACE) serves as one of the founding clubs of "The Department of Computer Science and Engineering" at Sri Venkateswara College of Engineering (SVCE). <br /><br />
									It is intriguing that ACE, whose beginnings date back to 1992, has grown into one of the most influential and well-known clubs in the SVCE. The fact that ACE has been operating for more than two decades is heartening and notable. ACE has consistently been instrumental in recognizing and integrating young minds and innovators by hosting a wide range of events every year, such as workshops, presentations, quizzes, career counseling, etc. Our flagship events, "INTERRUPT" and "HACKERRUPT," provide students with a stage on which to thrive and showcase their abilities.
									</p>
								</div>
						</div>
					</div>
					<div style = {{display: "flex", gap: "100px", flexDirection: "column"}}>
						<div className={styles.caro }>
							<Carousel />
						</div>
						<div className={styles.team} style = {{display: "flex", gap: "20px", flexDirection: "column"}}>
							<div>
								<div className = {styles.teamstruct}>
									<div style = {{textAlign: 'center'}}>
										<hr />
										<h1>Team 2022 - 2023</h1>
										<h4 className = {styles.para1}>The core members work to ensure that the club operates smoothly and achieves its goals and objectives. They collaborate to plan and execute events, manage finances, maintain accurate records, and promote the club to the campus community. </h4>
									</div>
									<div className={styles.profile }>
										{team.exeMembers.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio} linkedin = {member.linkedin}/></p>)}
									</div>
								</div>
							</div>	
							<div>
								<div className = {styles.teamstruct}>
									<div style = {{textAlign: 'center'}}>
										<h1>Design Team</h1>
											<h4 className = {styles.para1}>The design team plays a crucial role in creating and producing various materials such as posters, certificates, flyers, and other visual aids that promote the club and its activities.</h4>
									</div>
									<div className={styles.profile }>
										{team.desTeam.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio} linkedin = {member.linkedin}/></p>)}
									</div>
								</div>
							</div>	
							<div>
								<div className = {styles.teamstruct}>
									<div style = {{textAlign: 'center'}}>
										<h1>Web Team</h1>
											<h4 className = {styles.para1}>The web team is responsible for creating and maintaining a functional and attractive website that accurately reflects the club's activities and achievements, while promoting the club to the wider campus community. They also design and maintain any event-specific websites.</h4>
									</div>
									<div className={styles.profile }>
										{team.webTeam.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio} linkedin = {member.linkedin}/></p>)}
									</div>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</div>			
	)
}

export default Ace;