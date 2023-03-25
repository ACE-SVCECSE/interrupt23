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
						<div className={styles.container}>
							<div className={styles.frame}></div>
							<div className={styles.colorBox}>
								<a href={linkedin}><img src="/assets/linkedin.png" alt="linkedin"></img></a>
							</div>
							<img src={pic} alt={name}></img>
						</div>
						<div className={styles.content}>
							<p>{name}</p>
							<p style={{color:"#f9f871"}}>{position}</p>
							<p>{bio}</p>
						</div>				
					</div>
				</div>
			</>
		)
}

export default AceCard;
