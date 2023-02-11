import './Ace.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect} from 'react';
import insta from './images/87390.png';
import linkedin from './images/linkedin.png';
import pik from './images/fin.jpg';

const AceCard = ({pic, name, position, bio}) => {
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
			<>
				<div data-aos = "zoom-in-up" data-aos-once="true"  data-aos-delay="800">
					<div class = 'infoBox'>
						<div style = {{display: "flex", flexDirection: "column", alignItems: "center", alignContent:"flex-start"}}>
							<img src = {pik} height = "150" width = "150" order/>
							<h2 style = {{display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", margin: "10px", letterSpacing: "1.3px", fontWeight: "500"}}>{name}</h2>
							<h6 style = {{margin: "-5px"}}>{position}</h6>
							<div className = "socials">
								<h6>{bio}</h6>
								<div className = "socials2"><img src = {insta} width = "20px" height = "20px" style = {{alignSelf: "center"}}/><img src = {linkedin} width = "20px" height = "20px" style = {{alignSelf: "center"}}/></div>
							</div>
						</div> 
					</div>
				</div>
			</>
		)
	}
	else{
		return(
			<>
			<div data-aos = "zoom-out"  data-aos-delay="500">
				<div className = "infoBox">
					<div style = {{display: "flex", flexDirection: "column", alignItems: "center", alignContent:"flex-start"}}>
						<img src = {pik} height = "150" width = "150" order/>
						<h2 style = {{display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", margin: "10px", letterSpacing: "1.3px", fontWeight: "500"}}>{name}</h2>
						<h6 style = {{margin: "-5px"}}>{position}</h6>
						<div className = "socials">
							<h6>{bio}</h6>
							<div className = "socials2"><img src = {insta} width = "20px" height = "20px" style = {{alignSelf: "center"}}/><img src = {linkedin} width = "20px" height = "20px" style = {{alignSelf: "center"}}/></div>
						</div>
					</div>
				</div>
			</div>
		</>
		)
	}
}

export default AceCard;