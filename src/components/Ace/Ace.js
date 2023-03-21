import React from 'react';
import styles from './Ace.module.css';
import AceCard from './AceCard';
import Carousel from './Carousel';
import {useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import getTeam from '../../data/teamData';

const Ace = () => {
	const team = getTeam();

	useEffect(() => {
        AOS.init();
      }, []);
	  
	const [windowDimension, setWindowDimension] = useState(null);

	useEffect(() => {
		setWindowDimension(window.innerWidth);
	}, []);

	useEffect(() => {
		function handleResize() {
		setWindowDimension(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const isMobile = windowDimension <= 640;
	if (!isMobile){
		return(

			<div style={{ position: "relative", top: "50px" }} className={styles.ace }>
				<div style = {{display: "flex", flexDirection: "column", gap: "200px"}}>
					<div>
						<div className={styles.photoplusace }>
							<div>
								<img src = "/assets/whatisace.jpg" alt="whatisace" height = "20%" width = "60%" style = {{position: "relative", left: "260px"}}/>
								<div className={styles.blurbox} style = {{position: "relative", top: "-70px", boxSizing: "border-box", width: "600px", height: "50px", padding: "50px", border: "100px",textAlign: "center", zIndex: 1}}>
									<h1 className={`${styles.typing} ${styles.demo}`} style = {{position: "relative", left: "120px"}}>What is Ace?</h1>
									<p>The Association of Computer Engineers (ACE) serves as one of the founding clubs of "The Department of Computer Science and Engineering" at Sri Venkateswara College of Engineering (SVCE).
									It is intriguing that ACE, whose beginnings date back to 1992, has grown into one of the most influential and well-known clubs in the SVCE. The fact that ACE has been operating for more than two decades is heartening and notable. ACE has consistently been instrumental in recognizing and integrating young minds and innovators by hosting a wide range of events every year, such as workshops, presentations, quizzes, career counseling, etc. Our flagship events, "INTERRUPT" and "HACKERRUPT," provide students with a stage on which to thrive and showcase their abilities</p>
								</div>
							</div>
						</div>
					</div>
					<div style = {{display: "flex", gap: "100px", flexDirection: "column"}}>
						<div className={styles.caro }>
							<Carousel />
						</div>
						<div className={styles.team} style = {{display: "flex", gap: "20px", flexDirection: "column"}}>
							<div>
								<div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
									<div style = {{textAlign: 'center'}}>
										<hr />
										<h1>Team 2022 - 2023</h1>
										<h4 style = {{width: "600px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, nisl eu rhoncus auctor, lacus libero tincidunt dui, in consectetur lorem arcu ut ex. Praesent tristique nisi quis metus rutrum sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis pharetra mi. Curabitur et metus congue, aliquet metus sit amet, condimentum elit. Sed accumsan risus lacinia turpis accumsan pharetra.</h4>
									</div>
									<div className={styles.profile }>
										{team.exeMembers.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio}/></p>)}
									</div>
								</div>
							</div>	
							<div>
								<div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
									<div style = {{textAlign: 'center'}}>
										<h1>Design Team</h1>
											<h4 style={{ width: "600px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, nisl eu rhoncus auctor, lacus libero tincidunt dui, in consectetur lorem arcu ut ex. Praesent tristique nisi quis metus rutrum sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis pharetra mi. Curabitur et metus congue, aliquet metus sit amet, condimentum elit. Sed accumsan risus lacinia turpis accumsan pharetra.</h4>
									</div>
									<div className={styles.profile }>
										{team.desTeam.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio}/></p>)}
									</div>
								</div>
							</div>	
							<div>
								<div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
									<div style = {{textAlign: 'center'}}>
										<h1>Web Team</h1>
											<h4 style={{ width: "600px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, nisl eu rhoncus auctor, lacus libero tincidunt dui, in consectetur lorem arcu ut ex. Praesent tristique nisi quis metus rutrum sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis pharetra mi. Curabitur et metus congue, aliquet metus sit amet, condimentum elit. Sed accumsan risus lacinia turpis accumsan pharetra.</h4>
									</div>
									<div className={styles.profile }>
										{team.webTeam.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio}/></p>)}
									</div>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</div>
			
		)
	}
	else{
		return(
			<>
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }} className={styles.ace}>
					<img src = "https://acesvce.in/images/logo.png" alt="logo"/>	
					<h2 class = "typing-demo" style = {{letterSpacing: '7px'}}>WHAT IS ACE?</h2>
					<h6 style = {{width: "320px", textAlign: "center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, nisl eu rhoncus auctor, lacus libero tincidunt dui, in consectetur lorem arcu ut ex. Praesent tristique nisi quis metus rutrum sagittis. Lorem ipsum dolor sit amet,</h6>
				</div>
				<div className={styles.team} style = {{display: "flex", gap: "20px", flexDirection: "column"}}>
							<div>
								<div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
									<div style = {{textAlign: 'center'}}>
										<hr />
										<h1>Team 2022 - 2023</h1>
										<h3 style = {{width: "300px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, nisl eu rhoncus auctor, lacus libero tincidunt dui, in consectetur lorem arcu ut ex. Praesent tristique nisi quis metus rutrum sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis pharetra mi. Curabitur et metus congue, aliquet metus sit amet, condimentum elit. Sed accumsan risus lacinia turpis accumsan pharetra.</h3>
									</div>
									<div className={styles.profile }>
										{team.exeMembers.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio}/></p>)}
									</div>
								</div>
							</div>	
							<div>
								<div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
									<div style = {{textAlign: 'center'}}>
										<h1>Design Team</h1>
										<h3 style = {{width: "300px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, nisl eu rhoncus auctor, lacus libero tincidunt dui, in consectetur lorem arcu ut ex. Praesent tristique nisi quis metus rutrum sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis pharetra mi. Curabitur et metus congue, aliquet metus sit amet, condimentum elit. Sed accumsan risus lacinia turpis accumsan pharetra.</h3>
									</div>
									<div className={styles.profile }>
										{team.desTeam.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio}/></p>)}
									</div>
								</div>
							</div>	
							<div>
								<div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
									<div style = {{textAlign: 'center', color: 'black'}}>
										<h1>Web Team</h1>
										<h3 style = {{width: "300px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, nisl eu rhoncus auctor, lacus libero tincidunt dui, in consectetur lorem arcu ut ex. Praesent tristique nisi quis metus rutrum sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis pharetra mi. Curabitur et metus congue, aliquet metus sit amet, condimentum elit. Sed accumsan risus lacinia turpis accumsan pharetra.</h3>
									</div>
									<div className={styles.profile }>
										{team.webTeam.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio}/></p>)}
									</div>
								</div>
							</div>	
						</div>
			</>
		)
	}
}

export default Ace;
