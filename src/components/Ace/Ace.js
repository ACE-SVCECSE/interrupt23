import React from 'react';
import styles from './Ace.module.css';
import AceCard from './AceCard';
import Carousel from './Carousel';
import {useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const exeMembers =
[
		{
			"name":"Ritunjay V.",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "President",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Allen Manoj",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Vice President",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Nivedita P.",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Vice President",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Swetha A.",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Secretary",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Adithyarajen R.",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Treasurer",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Aadesh Vijayaraghavan",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Operations Head",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Sahana B.",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Joint secretary",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Pooja T.",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Executive Member",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Preethi Purnimaa K",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Executive Member",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Karthick K",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Executive Member",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Swetha Shakthi U",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Executive Member",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Yaswanth Krishnan U",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Executive Member",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Hema A",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Executive Member",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Dharani Narumugai R",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Executive Member",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Adithya Vikas A",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Executive Member",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Aparajitha P",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Executive Member",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Naafiah Yusra A",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Executive Member",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Sharan Balaji S",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Executive Member",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Sanjana J",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Executive Member",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Siva Ishwarya B",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Executive Member",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Vishnuvardan A",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Executive Member",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		}
	]
	const desTeam = 
	[
		{
			"name":"Vempali Dharani",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Design Team",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Sibi Mughil T",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Design Team",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Taruna Indrajith",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Design Team",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Shruthika S",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Design Team",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Soorya B",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Design Team",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Harini S",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Design Team",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Stany Romero S",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Design Team",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Manoj Kumar S",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Design Team",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		}
	]

	const webTeam = 
	[
		{
			"name":"Shiva Sankari C",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Web Team",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Ajay S",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Web Team",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Lakshmipriya R",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Web Team",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Dhanrithii D",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Web Team",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		},
		{
			"name":"Deepak Srinivas M",
			"pic": "C:/Users/socce/OneDrive/Desktop/wallpapers/fin.jpg/",
			"position": "Web Team",
			"bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam volutpat velit vitae dapibus. Donec convallis nunc a neque dictum aliquet a a arcu. Orci varius natoque penatibus et magnis."
		}
]

const Ace = () => {
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
								<img src = "/assets/whatisace.jpg" height = "20%" width = "60%" style = {{position: "relative", left: "260px"}}/>
								<div className={styles.blurbox} style = {{position: "relative", top: "-70px", boxSizing: "border-box", width: "600px", height: "50px", padding: "50px", border: "100px",textAlign: "center", zIndex: 1}}>
									<h1 className={styles.typing,styles.demo} style = {{position: "relative", left: "120px"}}>What is Ace?</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia, nisl eu rhoncus auctor, lacus libero tincidunt dui, in consectetur lorem arcu ut ex. Praesent tristique nisi quis metus rutrum sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis pharetra mi. Curabitur et metus congue, aliquet metus sit amet, condimentum elit. Sed accumsan risus lacinia turpis accumsan pharetra. Nam et mi ipsum. Nam consectetur leo et libero viverra hendrerit. Cras vel purus dolor. Integer mattis erat a placerat porta.</p>
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
										{exeMembers.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio}/></p>)}
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
										{desTeam.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio}/></p>)}
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
										{webTeam.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio}/></p>)}
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
					<img src = "https://acesvce.in/images/logo.png"/>	
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
										{exeMembers.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio}/></p>)}
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
										{desTeam.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio}/></p>)}
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
										{webTeam.map(member => <p><AceCard pic = {member.pic} name = {member.name.toUpperCase()} position = {member.position} bio = {member.bio}/></p>)}
									</div>
								</div>
							</div>	
						</div>
			</>
		)
	}
}

export default Ace;
