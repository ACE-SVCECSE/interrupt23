import React, {useRef,useEffect} from 'react';
import { gsap} from 'gsap/all';
import SubHeading from '../SubHeading/SubHeading';
import styles from './Home.module.css';
import Title from '../Title/Title';

function Home() {
	let left = useRef(null);
	let right = useRef(null);

	useEffect(()=>{
		let mm = gsap.matchMedia();

		mm.add("(min-width:769px)", () =>{
			let t1 = gsap.timeline();
			t1.fromTo(right,{xPercent:100,opacity:0},{xPercent:0,opacity:1,duration:0.7,ease:"elastic.out(1, 0.75)"})
		  	  .fromTo(left,{xPercent:-100,opacity:0},{xPercent:15,opacity:1,duration:0.7,delay:0.1,ease:"elastic.out(1, 0.75)"});
		})
		
	},[])
	return <>
	<div className={styles.home} >
		<div className={styles.parent}>
			<div className={styles.left} ref={el => left = el}>
					<Title heading="ACE SYMPOSIUM" desc=""></Title>
					<SubHeading title="ACE"></SubHeading>
			</div>
				
			<div className={styles.right} ref={el => right = el}>
				<img src='/assets/ace_home.jpeg' alt='img'></img>
			</div>			
		</div>
	</div>
	</>
}

export default Home;