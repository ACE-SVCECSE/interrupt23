import styles from './Ace.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

const AceCard = ({pic, name, position, bio, linkedin}) => {
	useEffect(() => {
        AOS.init();
      }, []);
	return(
			<>
				<div data-aos = "zoom-in-up" data-aos-once="true"  data-aos-delay="100">
					<div className={styles.infoBox}>
						<div style = {{display: "flex", flexDirection: "column", alignItems: "center", alignContent:"flex-start"}}>
							<img src= {pic} height = "150" width = "150" alt={name} order/>
							<h2 style = {{display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", margin: "10px", letterSpacing: "1.3px", fontWeight: "500", fontSize: "1.3rem"}}>{name}</h2>
							<h6 style = {{margin: "-5px", fontSize: "1.2rem"}}>{position}</h6>
							<div className={styles.socials }>
								<h6>{bio}</h6>
								<div className={styles.socials2}><a href={linkedin}><img src= "/assets/linkedin.png" alt="linkedin" width = "20px" height = "20px" style = {{alignSelf: "center"}}/></a></div>
							</div>
						</div> 
					</div>
				</div>
			</>
		)
}

export default AceCard;
