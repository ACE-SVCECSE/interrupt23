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

	return(
			<div style={{ position: "relative", top: "50px" }} className={styles.ace }>
				<div className = {styles.everything}>
					<div>
						<div className={styles.photoplusace }>
								<img src = "/assets/whatisace.jpg" className = {styles.whatisaceimage} alt="whatisace" height = "20%" width = "60%" style = {{position: "relative", left: "260px"}}/>
								<div className={styles.blurbox}>
									<h1 className = {styles.whatisace}>What is Ace?</h1>
									<div className = {styles.acepic}><img src = "https://i.ibb.co/WHmm2qh/logo-1.png" height = "100px" width = "100px"/></div>
									<p className = {styles.acepara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, nisl eu rhoncus auctor, lacus libero tincidunt dui, in consectetur lorem arcu ut ex. Praesent tristique nisi quis metus rutrum sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis pharetra mi. Curabitur et metus congue, aliquet metus sit amet, condimentum elit. Sed accumsan risus lacinia turpis accumsan pharetra. Nam et mi ipsum. Nam consectetur leo et libero viverra hendrerit. Cras vel purus dolor. Integer mattis erat a placerat porta.</p>
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
										<h4 className = {styles.para1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, nisl eu rhoncus auctor, lacus libero tincidunt dui, in consectetur lorem arcu ut ex. Praesent tristique nisi quis metus rutrum sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis pharetra mi. Curabitur et metus congue, aliquet metus sit amet, condimentum elit. Sed accumsan risus lacinia turpis accumsan pharetra.</h4>
									</div>
									<div className={styles.profile }>
										{team.exeMembers.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio}/></p>)}
									</div>
								</div>
							</div>	
							<div>
								<div className = {styles.teamstruct}>
									<div style = {{textAlign: 'center'}}>
										<h1>Design Team</h1>
											<h4 className = {styles.para1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, nisl eu rhoncus auctor, lacus libero tincidunt dui, in consectetur lorem arcu ut ex. Praesent tristique nisi quis metus rutrum sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis pharetra mi. Curabitur et metus congue, aliquet metus sit amet, condimentum elit. Sed accumsan risus lacinia turpis accumsan pharetra.</h4>
									</div>
									<div className={styles.profile }>
										{team.desTeam.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio}/></p>)}
									</div>
								</div>
							</div>	
							<div>
								<div className = {styles.teamstruct}>
									<div style = {{textAlign: 'center'}}>
										<h1>Web Team</h1>
											<h4 className = {styles.para1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, nisl eu rhoncus auctor, lacus libero tincidunt dui, in consectetur lorem arcu ut ex. Praesent tristique nisi quis metus rutrum sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis pharetra mi. Curabitur et metus congue, aliquet metus sit amet, condimentum elit. Sed accumsan risus lacinia turpis accumsan pharetra.</h4>
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

export default Ace;
